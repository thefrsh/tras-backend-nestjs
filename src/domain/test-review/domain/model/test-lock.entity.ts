import { BeforeInsert, Column, JoinColumn, ManyToOne, OneToOne } from 'typeorm'
import { BaseEntity } from '../../../shared-kernel'
import { DomainEntity } from '../../../shared-kernel'
import { TestRunAspect } from './test-run-aspect.entity'
import { Reviewer } from './reviewer.aggregate-root'
import { unix } from '../../../../infrastructure'

@DomainEntity({
  name: 'test_run_aspect_locks'
})
export class TestLock extends BaseEntity {

  @Column({
    update: false
  })
  at: number

  @JoinColumn({
    name: 'locker_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => Reviewer, (locker) => locker.locks)
  locker: Reviewer

  @JoinColumn({
    name: 'test_run_aspect_id',
    referencedColumnName: 'id'
  })
  @OneToOne(() => TestRunAspect, (aspect) => aspect.locking)
  aspect: TestRunAspect

  private constructor(
    aspect: TestRunAspect,
    by: Reviewer
  ) { super()

    this.aspect = aspect
    this.locker = by
  }

  public static acquire(
    aspect: TestRunAspect,
    by: Reviewer
  ): TestLock {

    return new TestLock(aspect, by)
  }

  @BeforeInsert()
  public since(): void {
    this.at = unix()
  }
}
