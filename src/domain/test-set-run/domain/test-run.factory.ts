import { DomainFactory } from '../../shared-kernel'
import { Mapper } from '@automapper/core'
import { InjectMapper } from '@automapper/nestjs'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Optional } from '../../shared-kernel'
import { TestRun } from './model'
import { BaseFactory } from '../../shared-kernel'
import { CreateTestRunRequest } from '../application'
import { TestRunAspect } from './model'

@DomainFactory()
export class TestRunFactory implements BaseFactory<TestRun> {

  constructor(
    @InjectMapper()
    private readonly mapper: Mapper,

    @InjectRepository(TestRunAspect)
    private readonly repository: Repository<TestRunAspect>
  ) { }

  public async create(
    request: CreateTestRunRequest
  ): Promise<TestRun> {

    const run = this.mapper
      .map(
        request,
        CreateTestRunRequest,
        TestRun
      )

    run.aspect = Optional.of(
      await this.repository.findOneBy({
        name: request.name
      })
    ).tapOrCreate(
      () => new TestRunAspect(request.name)
    )

    return run
  }
}
