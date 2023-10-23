import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestSetProfile } from './infrastructure'
import { Runner } from './domain'
import { TestRunProfile } from './infrastructure'
import { TestSetRun } from './domain'
import { TestRun } from './domain'
import { TestSetRunProjection } from '../../query/test-set-run'
import { TestSetRunApplicationService } from './application'
import { TestSetRunFactoryAdapter } from './domain'
import { TestSetRunQueryRepository } from '../../query/test-set-run'
import { TestSetRunQueryController } from '../../query/test-set-run'
import { TestSetRunController } from './application'
import { TestRunAspect } from './domain'
import { TestSetRunFactory } from './domain'
import { TestSetRunRepository } from './domain'
import { TestSetRunRepositoryAdapter } from './domain'
import { TestRunFactory } from './domain'

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TestSetRun,
      TestRun,
      TestRunAspect,
      Runner,
      TestSetRunProjection
    ])
  ],
  providers: [{
    provide: TestSetRunFactory,
    useClass: TestSetRunFactoryAdapter
  }, {
    provide: TestSetRunRepository,
    useClass: TestSetRunRepositoryAdapter
  },
    TestSetRunApplicationService,
    TestRunProfile,
    TestSetProfile,
    TestRunFactory,
    TestSetRunQueryController,
    TestSetRunProjection,
    TestSetRunQueryRepository,
  ],
  controllers: [
    TestSetRunController,
    TestSetRunQueryController
  ],
  exports: []
})
export class TestSetRunModule { }
