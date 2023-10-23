import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SecurityModule } from './domain/security'
import { AutomapperModule } from '@automapper/nestjs'
import { classes } from '@automapper/classes'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { APP_INTERCEPTOR } from '@nestjs/core'
import { BaseInterceptor } from './application'
import { addTransactionalDataSource } from 'typeorm-transactional'
import { DataSource } from 'typeorm'
import { EventEmitterModule } from '@nestjs/event-emitter'
import { EventEmitterBus } from './infrastructure'
import { AcceptHeaderMiddleware } from './application'
import { ContentTypeHeaderMiddleware } from './application'
import { TestSetRunModule } from './domain/test-set-run'
import { TestReviewModule } from './domain/test-review'
import { TestRunModule } from './domain/test-run'
import { UserExistsConstraintValidator } from './application'
import { ReasonExistsConstraintValidator } from './application'
import { ManualStatusExistsConstraintValidator } from './application'
import { TestExistsConstraintValidator } from './application'

import './infrastructure/support/global/extension'

import * as dotenv from 'dotenv'

dotenv.config()

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => ({
        type: 'postgres',
        host: process.env.DB_HOST,
        port: 5432,
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        migrations: [
          'dist/infrastructure/migration/*{.ts,.js}'
        ],
        migrationsRun: true,
        migrationsTableName: '_migrations',
        metadataTableName: '_metadata',
        namingStrategy: new SnakeNamingStrategy(),
        autoLoadEntities: true,
        logging: ['query']
      }),
      dataSourceFactory: async (options) => {
        return addTransactionalDataSource(new DataSource(options))
      }
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes()
    }),
    EventEmitterModule.forRoot(),
    SecurityModule,
    TestSetRunModule,
    TestReviewModule,
    TestRunModule
  ],
  providers: [{
    provide: APP_INTERCEPTOR,
    useClass: BaseInterceptor
  },
    EventEmitterBus,
    UserExistsConstraintValidator,
    ReasonExistsConstraintValidator,
    ManualStatusExistsConstraintValidator,
    TestExistsConstraintValidator
  ],
  exports: [
    EventEmitterBus
  ],
  controllers: []
})
export class AppModule implements NestModule {

  public configure(
    consumer: MiddlewareConsumer
  ): any {

    consumer
      .apply(
        AcceptHeaderMiddleware
      )
      .exclude({
        path: 'api/(.*)',
        method: RequestMethod.OPTIONS
      })
      .forRoutes('*')
      .apply(
        ContentTypeHeaderMiddleware
      )
      .exclude({
        path: 'api/(.*)',
        method: RequestMethod.OPTIONS
      }, {
        path: 'api/(.*)',
        method: RequestMethod.GET
      })
      .forRoutes('*')
  }
}
