import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Controller } from '@nestjs/common'
import { map, Observable } from 'rxjs'
import { ResponseEntity } from '../support'
import { Response } from 'express'

/**
 * Component that wraps every HTTP request and performs additional logic
 * In this case, it detects usage of {@link ResponseEntity} in {@link Controller} methods,
 * unpacks its properties and sets them as a response status, body and headers
 *
 * Designed to make responses easier and consolidated
 *
 * @see    {@link https://docs.nestjs.com/interceptors#interceptors}
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
@Injectable()
export class BaseInterceptor<T> implements NestInterceptor<ResponseEntity<T>> {

  public intercept(
    context: ExecutionContext,
    next: CallHandler<ResponseEntity<T>>
  ): Observable<any> | Promise<Observable<any>> {

    return next.handle()
      .pipe(
        map(
          body => {

            if (body instanceof ResponseEntity) {

              const response = context.switchToHttp()
                .getResponse<Response>()

              response.status(body.status)

              body.headers.asMap()
                .forEach((value, key) => {
                  response.header(key, value)
                })

              return body.body
            }

            return body
          }
        )
      )
  }
}
