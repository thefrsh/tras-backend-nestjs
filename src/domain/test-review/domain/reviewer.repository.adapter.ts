import { ReviewerRepository } from './port'
import { DomainRepository } from '../../shared-kernel'
import { FindOptionsWhere, Repository } from 'typeorm'
import { Reviewer } from './model'
import { Throws } from '../../../infrastructure'
import { ResourceNotFoundException } from '../../../infrastructure'
import { InjectRepository } from '@nestjs/typeorm'
import { Inject } from '@nestjs/common'
import { ReviewerInjector } from '../infrastructure'

@DomainRepository()
export class ReviewerRepositoryAdapter extends ReviewerRepository {

  constructor(
    @InjectRepository(Reviewer)
    repository: Repository<Reviewer>,

    @Inject(ReviewerInjector)
    private readonly injector: ReviewerInjector
  ) {
    super(repository, 'Reviewer')
  }

  public async load(
    where: FindOptionsWhere<Reviewer>
  ): Promise<Reviewer> | Throws<ResourceNotFoundException> {

    return this.injector
      .init(
        await super.load(where)
      )
  }
}
