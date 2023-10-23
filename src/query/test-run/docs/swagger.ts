import { applyDecorators, RequestMapping, RequestMappingMetadata } from '@nestjs/common'

export function SwaggerEndpoint(
  metadata: RequestMappingMetadata
): any {

  switch (metadata.path) {

    case '/:id':
      return applyDecorators(
        RequestMapping(metadata)
      )

    case '/':
      return applyDecorators(
        RequestMapping(metadata)
      )
  }
}
