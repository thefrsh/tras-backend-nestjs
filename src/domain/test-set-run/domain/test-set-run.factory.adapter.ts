import { DomainFactory } from '../../shared-kernel'
import { Mapper } from '@automapper/core'
import { InjectMapper } from '@automapper/nestjs'
import { TestSetRun } from './model'
import { InjectRepository } from '@nestjs/typeorm'
import { Runner } from './model'
import { Repository } from 'typeorm'
import { Inject } from '@nestjs/common'
import { TestSetRunFactory } from './port'
import { TestRunFactory } from './test-run.factory'
import { CreateTestSetRunRequest } from '../application'

@DomainFactory()
export class TestSetRunFactoryAdapter implements TestSetRunFactory {

  constructor(
    @InjectMapper()
    private readonly mapper: Mapper,

    @InjectRepository(Runner)
    private readonly repository: Repository<Runner>,

    @Inject(TestRunFactory)
    private readonly factory: TestRunFactory
  ) { }

  public async create(
    request: CreateTestSetRunRequest
  ): Promise<TestSetRun> {

    const run = this.mapper
      .map(
        request,
        CreateTestSetRunRequest,
        TestSetRun
      )

    run.runner = await this.repository
      .findOneBy({
        runnerName: request.runnerName
      })

    run.runs = Promise
      .all(
        request.tests
          .reduce(
            (promises, request) => {
              promises.push(this.factory.create(request))
              return promises
            }, []
          )
      );

    return run
  }
}
