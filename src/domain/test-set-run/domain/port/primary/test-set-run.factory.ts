import { BaseFactory } from '../../../../shared-kernel'
import { TestSetRun } from '../../model'
import { CreateTestSetRunRequest } from '../../../application'

export abstract class TestSetRunFactory implements BaseFactory<TestSetRun> {

  public abstract create(
    request: CreateTestSetRunRequest
  ): Promise<TestSetRun>
}
