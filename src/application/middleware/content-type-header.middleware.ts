import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common'
import { defined } from '../../infrastructure'
import { ErrorResponse } from '../support'
import { MEDIA_TYPES } from '../configuration'
import { Request, Response } from 'express'

@Injectable()
export class ContentTypeHeaderMiddleware implements NestMiddleware {

  public use(
    req: Request,
    res: Response,
    next: (error?: any) => void
  ): any {

    const content = req
      .headers['content-type']

    if (!defined(content)) {

      return res
        .status(HttpStatus.BAD_REQUEST)
        .json(
          new ErrorResponse(
            HttpStatus.BAD_REQUEST,
            '\'Content-Type\' header is missing'
          )
        )
    }

    const medias = content
      .split(',')
      .map(
        media => media.trim()
      )

    if (medias.none(media => media.in(MEDIA_TYPES))) {

      return res
        .status(HttpStatus.UNSUPPORTED_MEDIA_TYPE)
        .json(
          new ErrorResponse(
            HttpStatus.UNSUPPORTED_MEDIA_TYPE,
            'None of the Media Types provided in the \'Content-Type\' header are recognizable. ' +
            'Please use any of: ' + MEDIA_TYPES
          )
        )
    }

    next()
  }
}
