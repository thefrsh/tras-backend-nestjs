import { QueryRepository } from '../../domain/shared-kernel'
import { Repository } from 'typeorm'
import { TestRunProjection } from './test-run.projection'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseQueryRepository } from '../../domain/shared-kernel'

@QueryRepository()
export class TestRunQueryRepository extends BaseQueryRepository<TestRunProjection> {

  constructor(
    @InjectRepository(TestRunProjection)
    repository: Repository<TestRunProjection>
  ) {
    super(repository, 'Test Run')
  }
}
