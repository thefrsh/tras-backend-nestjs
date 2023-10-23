import { applyDecorators, HttpStatus, RequestMapping, RequestMappingMetadata } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'

export function SwaggerEndpoint(
  metadata: RequestMappingMetadata
): any {

  switch (metadata.path) {

    case '/':
      return applyDecorators(
        ApiOperation({
          summary: 'Test Set Run Report',
          description: 'Reports a Test Set Run with a list of associated Test Runs',
          tags: ['TestSetRun']
        }),
        ApiResponse({
          status: HttpStatus.CREATED,
          description: 'Successful operation, a resource URLs are sent as the Location header'
        }),
        ApiResponse({
          status: HttpStatus.NOT_FOUND,
          description: 'Runner with the name provided in the request is not found'
        }),
        RequestMapping(metadata)
      )
  }
}
