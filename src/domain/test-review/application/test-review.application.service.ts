import { ApplicationService } from '../../shared-kernel'
import { Transactional } from 'typeorm-transactional'
import { CreateTestReviewRequest } from './create-test-review.request'
import { TestReviewRepository } from '../domain'
import { Inject } from '@nestjs/common'
import { ReviewerRepository } from '../domain'

@ApplicationService()
export class TestReviewApplicationService {

  constructor(
    @Inject(ReviewerRepository)
    private readonly reviewers: ReviewerRepository,

    @Inject(TestReviewRepository)
    private readonly repository: TestReviewRepository
  ) { }

  @Transactional()
  public async create(
    request: CreateTestReviewRequest
  ): Promise<number> {

    const reviewer = await this.reviewers
      .load({
        username: request.reviewer
      })

    const review = await reviewer
      .review(request)

    return this.repository.save(review)
  }
}
