import { QueryRepository } from '../../domain/shared-kernel'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { TestSetRunProjection } from './test-set-run.projection'
import { BaseQueryRepository } from '../../domain/shared-kernel'

@QueryRepository()
export class TestSetRunQueryRepository extends BaseQueryRepository<TestSetRunProjection> {

  constructor(
    @InjectRepository(TestSetRunProjection)
    repository: Repository<TestSetRunProjection>
  ) {
    super(repository, 'Test Set Run')
  }
}
