import { BaseAggregateRoot } from '../../../shared-kernel'
import { DomainAggregateRoot } from '../../../shared-kernel'
import { BeforeInsert, Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { Reason } from './reason.entity'
import { ManualStatus } from './manual-status.entity'
import { Reviewer } from './reviewer.aggregate-root'
import { unix } from '../../../../infrastructure'
import { Throws } from '../../../../infrastructure'
import { UrlException } from '../../../shared-kernel'
import { TestRun } from './test-run.entity'
import { TestReviewLink } from './test-review-link.entity'

@DomainAggregateRoot({
  name: 'test_reviews'
})
export class TestReview extends BaseAggregateRoot {

  @Column({
    update: false
  })
  at: number

  @JoinColumn({
    name: 'reviewer_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => Reviewer, (reviewer) => reviewer.reviews, {
    cascade: ['insert', 'update']
  })
  reviewer: Reviewer

  @JoinColumn({
    name: 'reason_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => Reason, (reason) => reason.reviews, {
    cascade: ['insert', 'update']
  })
  reason: Reason

  @OneToMany(() => TestRun, (run) => run.review, {
    cascade: ['insert', 'update']
  })
  runs: Promise<TestRun[]>

  @JoinColumn({
    name: 'manual_status_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => ManualStatus, (status) => status.reviews, {
    cascade: ['insert', 'update']
  })
  status: ManualStatus

  public async lock(
    locked: boolean
  ): Promise<void> {

    (await this.runs)
      .forEach(
        run => {
          run.lock(locked, this.reviewer)
        }
      )
  }

  public async addLink(
    links: TestReviewLink[]
  ): Promise<void> | Throws<UrlException> {

    (await this.runs)
      .forEach(
        run => {
          run.addLink(links)
        }
      )
  }

  @BeforeInsert()
  public since(): void {
    this.at = unix()
  }
}
