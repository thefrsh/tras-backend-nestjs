import { DomainAggregateRoot } from '../../../shared-kernel'
import { Column } from 'typeorm'
import { BaseAggregateRoot } from '../../../shared-kernel'
import { JwtService } from '@nestjs/jwt'
import { Token } from './token.value'
import { Claims } from './claims.value'
import { LoginException } from '../login.exception'
import { rethrow } from '@nestjs/core/helpers/rethrow'
import { Password } from './password.value'
import { Throws } from '../../../../infrastructure'

/**
 * Subject entity representing User in the Security bounded context
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
@DomainAggregateRoot({
  name: 'users'
})
export class Subject extends BaseAggregateRoot {

  private passwordCheck: boolean
  private token: Token

  private jwt: JwtService

  @Column({
    unique: true
  })
  username: string

  @Column({
    unique: true
  })
  email: string

  @Column(() => Password, {
    prefix: false
  })
  password: Password

  public async checkPassword(
    password: string,
    plain: boolean
  ): Promise<boolean> {

    return this.password.check(password, plain)
  }

  public async usesPassword(
    password: string
  ): Promise<Subject> {

    this.passwordCheck = await this.checkPassword(password, true)
    return this
  }

  public async andReceiveToken(): Promise<void> {

    this.token = new Token(
      this.jwt.sign(
        new Claims(
          this.id, this.username, this.password.password
        )
        .asPlain()
      )
    )
  }

  public async orInformationOnIncorrectCredentials(): Promise<Token> | Throws<LoginException> {

    return this.passwordCheck ? this.token : rethrow(new LoginException('Incorrect credentials'))
  }

  public set jwt_(
    jwt: JwtService
  ) {
    this.jwt = jwt
  }
}
