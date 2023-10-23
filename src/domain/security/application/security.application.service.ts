import { ApplicationService } from '../../shared-kernel'
import { LoginResponse } from './login.response'
import { Transactional } from 'typeorm-transactional'
import { LoginRequest } from './login.request'
import { LoginUseCase } from '../domain'
import { RegisterRequest } from './register.request'
import { LoginException } from '../domain'
import { Claims } from '../domain'
import { SubjectRepository } from '../domain'
import { Throws } from '../../../infrastructure'
import { SubjectFactory } from '../domain'
import { Inject } from '@nestjs/common'

@ApplicationService()
export class SecurityApplicationService {

  constructor(
    @Inject(SubjectRepository)
    private readonly repository: SubjectRepository,

    @Inject(LoginUseCase)
    private readonly domain: LoginUseCase,

    @Inject(SubjectFactory)
    private readonly factory: SubjectFactory
  ) { }

  @Transactional()
  public async login(
    request: LoginRequest
  ): Promise<LoginResponse> {

    const subject = await this.repository
      .load({
        username: request.username
      })

    const token = await this.domain
      .login(subject, request.password)

    return new LoginResponse(
      subject.id, subject.username, token.jwt
    )
  }

  @Transactional()
  public async register(
    request: RegisterRequest
  ): Promise<void> {

    const subject = await this.factory
      .create(request)

    await this.repository.save(subject)
  }

  @Transactional()
  public async validate(
    claims: Claims
  ): Promise<boolean> | Throws<LoginException> {

    try {
      const subject = await this.repository
        .load({
          username: claims.username
        })

      return subject.checkPassword(claims.password, false)
    }
    catch {
      throw new LoginException('Invalid token')
    }
  }
}
