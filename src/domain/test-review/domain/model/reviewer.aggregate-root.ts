import { TestReview } from './test-review.aggregate-root'
import { Column, OneToMany } from 'typeorm'
import { DomainAggregateRoot } from '../../../shared-kernel'
import { BaseAggregateRoot } from '../../../shared-kernel'
import { TestReviewFactory } from '../test-review.factory'
import { CreateTestReviewRequest } from '../../application'
import { TestLock } from './test-lock.entity'

@DomainAggregateRoot({
  name: 'users'
})
export class Reviewer extends BaseAggregateRoot {

  private factory: TestReviewFactory

  @Column({
    unique: true,
    update: false
  })
  username: string

  @OneToMany(() => TestReview, (review) => review.reviewer)
  reviews: Promise<TestReview[]>

  @OneToMany(() => TestLock, (lock) => lock.locker)
  locks: Promise<TestLock>

  public async review(
    request: CreateTestReviewRequest
  ): Promise<TestReview> {

    const review = await this.factory
      .create(request)

    review.reviewer = this
    return review
  }

  public set factory_(
    factory: TestReviewFactory
  ) {
    this.factory = factory
  }
}
