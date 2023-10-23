import { applyDecorators, HttpStatus, RequestMapping, RequestMappingMetadata } from '@nestjs/common'
import { ApiOperation, ApiResponse } from '@nestjs/swagger'
import { ErrorResponse } from '../../../application/support/response/error.response'
import { TestSetRunProjection } from '../test-set-run.projection'

export function SwaggerEndpoint(
  metadata: RequestMappingMetadata
): any {

  switch (metadata.path) {

    case '/:id':
      return applyDecorators(
        ApiOperation({
          summary: 'Test Set Run Lookup By Id',
          description: 'Finds the Test Set Run defined by id parameter with all associated Single Tests',
          tags: ['TestSetRun']
        }),
        ApiResponse({
          status: HttpStatus.OK,
          description: 'Successful operation, Test Set Run has been found',
          type: TestSetRunProjection
        }),
        ApiResponse({
          status: HttpStatus.NOT_FOUND,
          description: 'Test Set Run with requested id is not found',
          type: ErrorResponse
        }),
        RequestMapping(metadata)
      )

    case '/':
      return applyDecorators(
        ApiOperation({
          summary: 'Test Set Run Lookup By Criteria',
          description: 'Finds the Test Set Runs defined by complex filter criteria',
          tags: ['TestSetRun']
        }),
        ApiResponse({
          status: HttpStatus.OK,
          description: 'Test Set Runs matching the criteria are returned or empty array otherwise',
          headers: {
            'X-Total-Count': {
              example: 55,
              description: 'Total count of Test Set Runs matching criteria ignoring pagination settings'
            }
          },
          type: Array<TestSetRunProjection>
        }),
        RequestMapping(metadata)
      )
  }
}
