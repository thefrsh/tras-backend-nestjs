import { QueryRepository } from '../../../domain/shared-kernel'
import { Repository } from 'typeorm'
import { ManualStatusProjection } from './manual-status.projection'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseQueryRepository } from '../../../domain/shared-kernel'

@QueryRepository()
export class ManualStatusQueryRepository extends BaseQueryRepository<ManualStatusProjection> {

  constructor(
    @InjectRepository(ManualStatusProjection)
    repository: Repository<ManualStatusProjection>
  ) {
    super(repository, 'Manual Status')
  }
}
