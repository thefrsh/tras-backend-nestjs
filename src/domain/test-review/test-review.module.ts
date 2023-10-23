import { Module } from '@nestjs/common'
import { TestReviewController } from './application'
import { TypeOrmModule } from '@nestjs/typeorm'
import { TestReview } from './domain'
import { TestReviewApplicationService } from './application'
import { Reviewer } from './domain'
import { TestReviewRepository } from './domain'
import { TestReviewRepositoryAdapter } from './domain'
import { TestRun } from './domain'
import { ManualStatus } from './domain'
import { Reason } from './domain'
import { TestLock } from './domain'
import { TestReviewLink } from './domain'
import { TestRunAspect } from './domain'
import { ReviewerRepository } from './domain'
import { ReviewerRepositoryAdapter } from './domain'
import { TestReviewFactory } from './domain'
import { ReviewerInjector } from './infrastructure'
import { TestReviewProfile } from './infrastructure'
import { TestReviewQueryController } from '../../query/test-review'
import { ManualStatusQueryController } from '../../query/test-review'
import { ReasonQueryController } from '../../query/test-review'
import { ReasonCategoryQueryController } from '../../query/test-review'
import { ManualStatusQueryRepository } from '../../query/test-review'
import { ReasonQueryRepository } from '../../query/test-review'
import { ReasonCategoryQueryRepository } from '../../query/test-review'
import { TestReviewProjection } from '../../query/test-review'
import { ManualStatusProjection } from '../../query/test-review'
import { ReasonProjection } from '../../query/test-review'
import { ReasonCategoryProjection } from '../../query/test-review'
import { TestReviewQueryRepository } from '../../query/test-review'

@Module({
  exports: [],
  imports: [
    TypeOrmModule.forFeature([
      TestReview,
      Reviewer,
      TestRun,
      ManualStatus,
      Reason,
      TestLock,
      TestReviewLink,
      TestRunAspect,
      TestReviewProjection,
      ManualStatusProjection,
      ReasonProjection,
      ReasonCategoryProjection
    ])
  ],
  providers: [{
    provide: TestReviewRepository,
    useClass: TestReviewRepositoryAdapter
  }, {
    provide: ReviewerRepository,
    useClass: ReviewerRepositoryAdapter
  },
    TestReviewApplicationService,
    TestReviewFactory,
    ReviewerInjector,
    TestReviewProfile,
    ManualStatusQueryRepository,
    ReasonQueryRepository,
    ReasonCategoryQueryRepository,
    TestReviewQueryRepository
  ],
  controllers: [
    TestReviewController,
    TestReviewQueryController,
    ManualStatusQueryController,
    ReasonQueryController,
    ReasonCategoryQueryController
  ]
})
export class TestReviewModule { }
