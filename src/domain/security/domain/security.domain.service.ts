import { DomainService } from '../../shared-kernel'
import { LoginUseCase } from './port'
import { Subject } from './model'
import { LoginException } from './login.exception'
import { Token } from './model'
import { Throws } from '../../../infrastructure'

/**
 * Performs domain operations on {@link Subject}
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
@DomainService()
export class SecurityDomainService implements LoginUseCase {

  /**
   * Performs log in operation for the specified user
   *
   * @param subject  Registered user who attempts to log in
   * @param password Above-mentioned user's password
   *
   * @return {@link Token}          JWT that shall be used with each request
   * @throws {@link LoginException} When the provided password is not correct
   */
  public async login(
    subject: Subject,
    password: string
  ): Promise<Token> | Throws<LoginException> {

    await subject.usesPassword(password)
    await subject.andReceiveToken()
    return subject.orInformationOnIncorrectCredentials()
  }
}
