import { applyDecorators, HttpStatus, RequestMapping, RequestMappingMetadata } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { LoginResponse } from '../login.response'
import { ErrorResponse } from '../../../../application/support/response/error.response'

export function SwaggerEndpoint(
  metadata: RequestMappingMetadata
): any {

  switch (metadata.path) {

    case '/login':
      return applyDecorators(
        ApiOperation({
          summary: 'Login',
          description: 'Login to the system with User credentials',
          tags: ['Security']
        }),
        ApiResponse({
          status: HttpStatus.OK,
          description: 'Successful login',
          type: LoginResponse
        }),
        ApiResponse({
          status: HttpStatus.UNAUTHORIZED,
          description: 'Credentials are not valid',
          type: ErrorResponse
        }),
        RequestMapping(metadata)
      )

    case '/register':
      return applyDecorators(
        ApiOperation({
          summary: 'Register',
          description: 'Register to the system with User credentials',
          tags: ['Security']
        }),
        ApiResponse({
          status: HttpStatus.CREATED,
          description: 'Successful registration'
        }),
        ApiResponse({
          status: HttpStatus.BAD_REQUEST,
          description: 'Some of the credentials do not meet requirements. Detailed message in the response body',
          type: ErrorResponse
        }),
        ApiResponse({
          status: HttpStatus.CONFLICT,
          description: 'Username/Email is already taken',
          type: ErrorResponse
        }),
        RequestMapping(metadata)
      )
  }
}
