import { Subject } from '../../model'
import { Token } from '../../model'

export abstract class LoginUseCase {

  public abstract login(
    subject: Subject,
    password: string
  ): Promise<Token>
}
