import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common'
import { QueryFailedError } from 'typeorm'
import { Response } from 'express'
import { ErrorResponse } from '../../../application'

import * as _ from 'lodash'

/**
 * Resolves the known exceptions thrown in {@link SecurityController} that do not extend {@link HttpException}
 * @see {@link Catch, ExceptionFilter}
 *
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
@Catch(QueryFailedError)
export class SecurityExceptionHandler implements ExceptionFilter<QueryFailedError> {

  public catch(
    exception: QueryFailedError,
    host: ArgumentsHost
  ): void {

    const [credential, value] = exception.driverError
      .detail
      .match(/\(.*?\)/g)
      .map(x => x.replace(/[()]/g, ''))

    const response = host.switchToHttp()
      .getResponse<Response>()

    response
      .status(HttpStatus.CONFLICT)
      .json(
        new ErrorResponse(
          HttpStatus.CONFLICT,
          `${_.capitalize(credential)} '${value}' is already in use`
        )
      )
  }
}
