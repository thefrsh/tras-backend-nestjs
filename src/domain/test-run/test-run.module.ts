import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestRunProjection } from '../../query/test-run'
import { TestRunQueryController } from '../../query/test-run'
import { TestRunQueryRepository } from '../../query/test-run'

@Module({
  exports: [],
  providers: [
    TestRunQueryRepository
  ],
  imports: [
    TypeOrmModule.forFeature([
      TestRunProjection
    ])
  ],
  controllers: [
    TestRunQueryController
  ]
})
export class TestRunModule { }
