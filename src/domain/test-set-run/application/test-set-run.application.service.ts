import { ApplicationService } from '../../shared-kernel'
import { Transactional } from 'typeorm-transactional'
import { TestSetRunRepository } from '../domain/port'
import { TestSetRunFactory } from '../domain/port'
import { Inject } from '@nestjs/common'
import { CreateTestSetRunRequest } from './create-test-set-run.request'

@ApplicationService()
export class TestSetRunApplicationService {

  constructor(
    @Inject(TestSetRunFactory)
    private readonly factory: TestSetRunFactory,

    @Inject(TestSetRunRepository)
    private readonly repository: TestSetRunRepository
  ) { }

  @Transactional()
  public async create(
    request: CreateTestSetRunRequest
  ): Promise<number> {

    const run = await this.factory
      .create(request)

    return this.repository.save(run)
  }
}
