import { DomainRepository } from '../../shared-kernel'
import { FindOptionsWhere, Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { Subject } from './model'
import { SubjectRepository } from './port'
import { ResourceNotFoundException } from '../../../infrastructure'
import { Throws } from '../../../infrastructure'
import { Inject } from '@nestjs/common'
import { SubjectInjector } from '../infrastructure'

@DomainRepository()
export class SubjectRepositoryAdapter extends SubjectRepository {

  constructor(
    @InjectRepository(Subject)
    repository: Repository<Subject>,

    @Inject(SubjectInjector)
    private readonly injector: SubjectInjector
  ) {
    super(repository, 'Subject')
  }

  public override async load(
    where: FindOptionsWhere<Subject>
  ): Promise<Subject> | Throws<ResourceNotFoundException> {

    return this.injector
      .init(
        await super.load(where)
      )
  }
}
