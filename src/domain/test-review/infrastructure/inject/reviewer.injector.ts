import { Injector } from '../../../../infrastructure'
import { Inject, Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { Reviewer } from '../../domain'
import { TestReviewFactory } from '../../domain'

@Injectable()
export class ReviewerInjector extends Injector<Reviewer> {

  constructor(
    @Inject(ModuleRef)
    ref: ModuleRef
  ) {
    super(ref)
  }

  public override init(
    root: Reviewer
  ): Reviewer {

    root.factory_ = this.ref
      .get(TestReviewFactory)

    return super.init(root)
  }
}
