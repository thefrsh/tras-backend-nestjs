import { QueryRepository } from '../../../domain/shared-kernel'
import { Repository } from 'typeorm'
import { ReasonCategoryProjection } from './reason-category.projection'
import { InjectRepository } from '@nestjs/typeorm'
import { BaseQueryRepository } from '../../../domain/shared-kernel'

@QueryRepository()
export class ReasonCategoryQueryRepository extends BaseQueryRepository<ReasonCategoryProjection> {

  constructor(
    @InjectRepository(ReasonCategoryProjection)
    repository: Repository<ReasonCategoryProjection>
  ) {
    super(repository, 'Reason Category')
  }
}
