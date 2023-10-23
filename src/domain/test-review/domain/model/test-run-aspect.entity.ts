import { Column, JoinTable, ManyToMany, OneToMany, OneToOne } from 'typeorm'
import { TestReviewLink } from './test-review-link.entity'
import { DomainEntity } from '../../../shared-kernel'
import { BaseEntity } from '../../../shared-kernel'
import { TestRun } from './test-run.entity'
import { defined, unix } from '../../../../infrastructure'
import { Reviewer } from './reviewer.aggregate-root'
import { TestLock } from './test-lock.entity'

@DomainEntity({
  name: 'test_run_aspects'
})
export class TestRunAspect extends BaseEntity {

  @Column({
    unique: true,
    update: false
  })
  name: string

  @Column({
    nullable: true,
  })
  lockTime: number

  @OneToOne(() => TestLock, (lock) => lock.aspect)
  locking: TestLock

  @OneToMany(() => TestRun, (run) => run.aspect)
  runs: Promise<TestRun[]>

  @JoinTable({
    name: 'test_run_aspects_review_links',
    joinColumn: {
      name: 'test_run_aspect_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'test_review_link_id',
      referencedColumnName: 'id'
    }
  })
  @ManyToMany(() => TestReviewLink, (link) => link.aspects, {
    cascade: ['insert', 'update']
  })
  links: Promise<TestReviewLink[]>

  /**
   * WARNING: Idempotent operation: when the Test Run Aspect is locked/unlocked
   * nothing happens on another lock/unlock request, respectively.
   * Request ends with 2XX code with no information on a redundant locking attempt.
   *
   * @param locked Decides whether the Test Run Aspect shall be locked or unlocked
   * @param by     {@link Reviewer} reference taking this action
   */
  public lock(
    locked: boolean,
    by: Reviewer
  ): void {

    if (defined(this.locking) .not (locked)) {

      this.locking = locked
        ? this.acquire(by)
        : this.release()
    }
  }

  /**
   * WARNING: This method, in-fact, overrides existing links, if any.
   * Expected, designed behaviour, but experimental so far.
   * Might be changed in the future.
   *
   * @param links {@link TestReviewLink} list to be saved
   */
  public addLink(
    links: TestReviewLink[]
  ): void {

    this.links = Promise
      .all(
        links
      )
  }

  private acquire(
    by: Reviewer
  ): TestLock {

    return TestLock.acquire(this, by)
  }

  private release() {

    const duration = unix() - this.locking.at
    this.lockTime += duration
    return null
  }
}
