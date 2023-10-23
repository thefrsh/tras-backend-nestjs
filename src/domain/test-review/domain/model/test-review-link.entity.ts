import { BaseEntity } from '../../../shared-kernel'
import { DomainEntity } from '../../../shared-kernel'
import { Link } from '../../../shared-kernel'
import { Column, JoinTable, ManyToMany } from 'typeorm'
import { TestRunAspect } from './test-run-aspect.entity'
import { Throws } from '../../../../infrastructure'
import { UrlException } from '../../../shared-kernel'

@DomainEntity({
  name: 'test_review_links'
})
export class TestReviewLink extends BaseEntity {

  @Column(() => Link, {
    prefix: false
  })
  link: Link

  @JoinTable({
    name: 'test_run_aspects_review_links',
    joinColumn: {
      name: 'test_review_link_id'
    },
    inverseJoinColumn: {
      name: 'test_run_aspect_id'
    }
  })
  @ManyToMany(() => TestRunAspect, (aspect) => aspect.links)
  aspects: Promise<TestRunAspect[]>

  private constructor(
    link: string
  ) { super()
    this.link = Link.of(link)
  }

  public static of(
    link: string
  ): TestReviewLink | Throws<UrlException> {

    return new TestReviewLink(link)
  }

  public plain(): string {
    return this.link.link
  }
}
