import { DomainFactory } from '../../shared-kernel'
import { CreateTestReviewRequest } from '../application'
import { TestReview } from './model'
import { In, Repository } from 'typeorm'
import { ManualStatus } from './model'
import { InjectRepository } from '@nestjs/typeorm'
import { Reason } from './model'
import { BaseFactory } from '../../shared-kernel'
import { TestRun } from './model'
import { TestReviewLink } from './model'

@DomainFactory()
export class TestReviewFactory implements BaseFactory<TestReview> {

  constructor(
    @InjectRepository(ManualStatus)
    private readonly statuses: Repository<ManualStatus>,

    @InjectRepository(Reason)
    private readonly reasons: Repository<Reason>,

    @InjectRepository(TestRun)
    private readonly runs: Repository<TestRun>,

    @InjectRepository(TestReviewLink)
    private readonly links: Repository<TestReviewLink>
  ) { }

  public async create(
    request: CreateTestReviewRequest
  ): Promise<TestReview> {

    const review = new TestReview()

    review.status = await this.statuses
      .findOneBy({
        name: request.manualStatus
      })

    review.reason = await this.reasons
      .findOneBy({
        name: request.reason
      })

    review.runs = this.runs
      .find({
        where: {
          id: In(request.tests)
        },
        relations: {
          aspect: {
            locking: true,
            links: true
          }
        }
      })

    await review
      .lock(request.locked)

    const founds = await this.links
      .findBy({
        link: {
          link: In(request.links)
        }
      })

    /**
     * We've got to check which links are missing in the database first
     * If requested link does not exist in the persistence we simply create it
     */
    const lackings = request.links
      .filter(
        sought => !sought
          .in(
            founds.map(
              found => found.plain()
            )
          )
      )
      .map(
        lacking => TestReviewLink
          .of(lacking)
      )

    /**
     * Now, we can add existing links along with the newly created ones
     */
    await review
      .addLink(founds.concat(lackings))

    return review
  }
}
