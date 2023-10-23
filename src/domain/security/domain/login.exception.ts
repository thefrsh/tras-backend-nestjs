import { HttpException, HttpStatus } from '@nestjs/common'

/**
 * Domain exception raised when business rules regarding Security are broken
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export class LoginException extends HttpException {

  constructor(
    message: string
  ) {
    super(message, HttpStatus.UNAUTHORIZED)
  }
}
