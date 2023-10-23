import { PassportStrategy } from '@nestjs/passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import { Inject, Injectable, forwardRef } from '@nestjs/common'
import { Claims } from '../domain'
import { LoginException } from '../domain'
import { Throws } from '../../../infrastructure'
import { SecurityApplicationService } from '../application'

/**
 * Strategy class that implements basic JWT settings
 * @see {@link https://docs.nestjs.com/security/authentication#jwt-functionality}
 */
@Injectable()
export class AuthenticationStrategy extends PassportStrategy(Strategy) {

  /**
   * It's important to use {@link forwardRef} here to avoid circular dependency
   * @see {@link https://docs.nestjs.com/fundamentals/circular-dependency}
   *
   * @param service {@link SecurityApplicationService} injected instance
   */
  constructor(
    @Inject(forwardRef(() => SecurityApplicationService))
    protected readonly service: SecurityApplicationService
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET
    })
  }

  public async validate(
    claims: Claims
  ): Promise<boolean> | Throws<LoginException> {

    return this.service.validate(claims)
  }
}
