import { QueryRepository } from '../../../domain/shared-kernel'
import { Repository } from 'typeorm'
import { ReasonProjection } from './reason.projection'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseQueryRepository } from '../../../domain/shared-kernel'

@QueryRepository()
export class ReasonQueryRepository extends BaseQueryRepository<ReasonProjection> {

  constructor(
    @InjectRepository(ReasonProjection)
    repository: Repository<ReasonProjection>
  ) {
    super(repository, 'Reason')
  }
}
