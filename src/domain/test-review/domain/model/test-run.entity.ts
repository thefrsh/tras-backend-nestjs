import { BaseEntity } from '../../../shared-kernel'
import { DomainEntity } from '../../../shared-kernel'
import { TestReview } from './test-review.aggregate-root'
import { Column, JoinColumn, ManyToOne } from 'typeorm'
import { TestRunAspect } from './test-run-aspect.entity'
import { TestReviewLink } from './test-review-link.entity'
import { Reviewer } from './reviewer.aggregate-root'

@DomainEntity({
  name: 'test_runs'
})
export class TestRun extends BaseEntity {

  @Column({
    update: false
  })
  readonly name: string

  @JoinColumn({
    name: 'test_review_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => TestReview, (review) => review.runs)
  review: TestReview

  @JoinColumn({
    name: 'test_run_aspect_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => TestRunAspect, (aspect) => aspect.runs, {
    cascade: ['insert', 'update']
  })
  aspect: TestRunAspect

  public lock(
    locked: boolean,
    by: Reviewer
  ): void {

    this.aspect
      .lock(locked, by)
  }

  public addLink(
    links: TestReviewLink[]
  ): void {

    this.aspect
      .addLink(links)
  }
}
