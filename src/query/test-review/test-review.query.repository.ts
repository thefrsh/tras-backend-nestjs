import { QueryRepository } from '../../domain/shared-kernel'
import { Repository } from 'typeorm'
import { TestReviewProjection } from './test-review.projection'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseQueryRepository } from '../../domain/shared-kernel'

@QueryRepository()
export class TestReviewQueryRepository extends BaseQueryRepository<TestReviewProjection> {

  constructor(
    @InjectRepository(TestReviewProjection)
    repository: Repository<TestReviewProjection>
  ) {
    super(repository, 'Test Review')
  }
}
