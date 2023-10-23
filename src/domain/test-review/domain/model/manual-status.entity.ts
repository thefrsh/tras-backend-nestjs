import { BaseEntity } from '../../../shared-kernel'
import { DomainEntity } from '../../../shared-kernel'
import { Column, OneToMany } from 'typeorm'
import { TestReview } from './test-review.aggregate-root'

@DomainEntity({
  name: 'manual_statuses'
})
export class ManualStatus extends BaseEntity {

  @Column({
    unique: true,
    update: false
  })
  name: string

  @OneToMany(() => TestReview, (review) => review.status)
  reviews: Promise<TestReview>
}
