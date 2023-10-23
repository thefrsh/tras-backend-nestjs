import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common'
import { defined } from '../../infrastructure'
import { ErrorResponse } from '../support'
import { MEDIA_TYPES } from '../configuration'
import { Request, Response } from 'express'

/**
 *
 *
 */
@Injectable()
export class AcceptHeaderMiddleware implements NestMiddleware {

  public use(
    req: Request,
    res: Response,
    next: (error?: any) => void
  ): any {

    const accept = req
      .headers['accept']

    if (!defined(accept)) {

      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(
          new ErrorResponse(
            HttpStatus.BAD_REQUEST,
            '\'Accept\' header is missing'
          )
        )
    }

    const medias = accept
      .split(',')
      .map(
        media => media.trim()
      )

    if (medias.none(media => media.in(MEDIA_TYPES))) {

      return res
        .status(HttpStatus.NOT_ACCEPTABLE)
        .json(
          new ErrorResponse(
            HttpStatus.NOT_ACCEPTABLE,
            'None of the Media Types requested in the \'Accept\' header are supported. ' +
            'Please use any of: ' + MEDIA_TYPES
          )
        )
    }

    next()
  }
}
