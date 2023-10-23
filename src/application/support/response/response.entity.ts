import { HttpStatus } from '@nestjs/common'
import { HttpHeaders } from '../const'
import { MediaType } from '../const'
import { defined } from '../../../infrastructure'

/**
 * Represents an HTTP Response object with generic body type
 * Intended to use as a return value from Controller methods
 *
 * @see {@link "@nestjs/common/Controller"}
 *
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export class ResponseEntity<Body> {

  constructor(
    readonly status: HttpStatus,
    readonly body?: Body,
    readonly headers?: HttpHeaders
  ) {
    if (!defined(headers)) {
      this.headers = new HttpHeaders()
    }
    this.headers
      .set(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON)
  }
}

export type AsyncResponseEntity<Body> = Promise<ResponseEntity<Body>>
