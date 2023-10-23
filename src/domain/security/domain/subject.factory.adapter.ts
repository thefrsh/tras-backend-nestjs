import { DomainFactory } from '../../shared-kernel'
import { Subject } from './model'
import { RegisterRequest } from '../application'
import { Inject } from '@nestjs/common'
import { SubjectFactory } from './port'
import { SubjectInjector } from '../infrastructure'
import { Password } from './model'

@DomainFactory()
export class SubjectFactoryAdapter implements SubjectFactory {

  constructor(
    @Inject(SubjectInjector)
    private readonly injector: SubjectInjector
  ) { }

  public async create(
    request: RegisterRequest
  ): Promise<Subject> {

    const subject = new Subject()

    subject.username = request.username
    subject.email = request.email
    subject.password = await Password.of(request.password)

    return this.injector
      .init(
        subject
      )
  }
}
