import { ExecutionContext, Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'
import { Observable } from 'rxjs'
import { Request } from 'express'
import { HttpMethod } from '../../../application'

@Injectable()
export class AuthenticationGuard extends AuthGuard('jwt') {

  /**
   * Some browsers send a so-called 'pre-flight' request to check
   * whether the operation can be executed in the current CORS context
   *
   * Pre-flight request always uses OPTIONS method and does not support
   * custom authentication methods, like JWT in this case, so we just want to allow it
   * since this operation is neither modifying nor vulnerable
   *
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS}
   * @see {@link https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS}
   * @see {@link https://developer.mozilla.org/en-US/docs/Glossary/Preflight_request}
   */
  public canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {

    const request = context.switchToHttp()
      .getRequest<Request>()

    return request.method.equals(HttpMethod.OPTIONS) || super.canActivate(context)
  }
}
