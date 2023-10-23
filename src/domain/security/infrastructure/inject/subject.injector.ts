import { Injector } from '../../../../infrastructure'
import { Inject, Injectable } from '@nestjs/common'
import { ModuleRef } from '@nestjs/core'
import { Subject } from '../../domain'
import { JwtService } from '@nestjs/jwt'

@Injectable()
export class SubjectInjector extends Injector<Subject> {

  constructor(
    @Inject(ModuleRef)
    ref: ModuleRef
  ) {
    super(ref)
  }

  public override init(
    root: Subject
  ): Subject {

    root.jwt_ = this.ref
      .get(JwtService, {
        strict: false
      })

    return super.init(root)
  }
}
