import { Body, Controller, HttpStatus, Inject, RequestMethod, UseFilters } from '@nestjs/common'
import { LoginRequest } from './login.request'
import { RegisterRequest } from './register.request'
import { SecurityApplicationService } from './security.application.service'
import { LoginResponse } from './login.response'
import { SecurityExceptionHandler } from './security.exception-handler'
import { ApiTags } from '@nestjs/swagger'
import { AsyncResponseEntity, ResponseEntity } from '../../../application'
import { HttpHeaders } from '../../../application'
import { SwaggerEndpoint } from './docs/swagger'

@ApiTags('Security')
@UseFilters(SecurityExceptionHandler)
@Controller({
  path: '/security'
})
export class SecurityController {

  constructor(
    @Inject(SecurityApplicationService)
    private readonly service: SecurityApplicationService
  ) { }

  @SwaggerEndpoint({
    path: '/login',
    method: RequestMethod.POST
  })
  public async login(
    @Body() request: LoginRequest
  ): AsyncResponseEntity<LoginResponse> {

    const response = await this.service
      .login(request)

    return new ResponseEntity(HttpStatus.OK, response)
  }

  /*
    ===============================================================================================================
  */

  @SwaggerEndpoint({
    path: '/register',
    method: RequestMethod.POST
  })
  public async register(
    @Body() request: RegisterRequest
  ): AsyncResponseEntity<void> {

    await this.service
      .register(request)

    const headers = new HttpHeaders()
      .set(HttpHeaders.LOCATION, '/api/security/login')

    return new ResponseEntity(HttpStatus.CREATED, undefined, headers)
  }
}
