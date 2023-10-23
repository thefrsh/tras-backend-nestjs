import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { PassportModule } from '@nestjs/passport'
import { SecurityController } from './application'
import { TypeOrmModule } from '@nestjs/typeorm'
import { LoginUseCase } from './domain'
import { SecurityDomainService } from './domain'
import { SecurityApplicationService } from './application'
import { Subject } from './domain'
import { AuthenticationGuard } from './infrastructure'
import { AuthenticationStrategy } from './infrastructure'
import { SubjectRepositoryAdapter } from './domain'
import { SubjectRepository } from './domain'
import { SubjectFactory } from './domain'
import { SubjectFactoryAdapter } from './domain'
import { SubjectInjector } from './infrastructure'

import * as dotenv from 'dotenv'

dotenv.config()

/**
 * Security module based on {@code @nestjs/jwt}
 *
 * @see {@link https://jwt.io/introduction}
 * @see {@link https://github.com/nestjs/jwt}
 */
@Module({
  imports: [
    TypeOrmModule.forFeature([
      Subject
    ]),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: {
        algorithm: 'HS256',
        expiresIn: '60m'
      }
    }),
    PassportModule
  ],
  controllers: [
    SecurityController
  ],
  providers: [{
    provide: LoginUseCase,
    useClass: SecurityDomainService
  }, {
    provide: SubjectRepository,
    useClass: SubjectRepositoryAdapter
  }, {
    provide: SubjectFactory,
    useClass: SubjectFactoryAdapter
  },
    SecurityApplicationService,
    AuthenticationGuard,
    AuthenticationStrategy,
    SubjectInjector,
    Subject
  ],
  exports: []
})
export class SecurityModule { }
