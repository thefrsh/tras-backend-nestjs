import { DomainEntity } from '../../../shared-kernel'
import { TestReview } from './test-review.aggregate-root'
import { Column, OneToMany } from 'typeorm'
import { BaseEntity } from '../../../shared-kernel'

@DomainEntity({
  name: 'reasons'
})
export class Reason extends BaseEntity {

  @Column({
    unique: true,
    update: false
  })
  name: string

  @OneToMany(() => TestReview, (review) => review.reason)
  reviews: Promise<TestReview[]>
}
