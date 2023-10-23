import { HttpException, HttpStatus } from '@nestjs/common'

/**
 * General exception thrown when an entity is not found in the persistence
 *
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export class ResourceNotFoundException extends HttpException {

  constructor(
    message: string
  ) {
    super(message, HttpStatus.NOT_FOUND)
  }
}
