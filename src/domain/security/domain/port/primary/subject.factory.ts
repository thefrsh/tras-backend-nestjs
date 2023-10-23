import { BaseFactory } from '../../../../shared-kernel'
import { Subject } from '../../model'
import { RegisterRequest } from '../../../application'

export abstract class SubjectFactory implements BaseFactory<Subject> {

  public abstract create(
    request: RegisterRequest
  ): Promise<Subject>
}
