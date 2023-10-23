import { applyDecorators, RequestMapping, RequestMappingMetadata } from '@nestjs/common'

export function SwaggerEndpoint(
  metadata: RequestMappingMetadata
): any {

  switch (metadata.path) {

    case '/reasons/:id':
      return applyDecorators(
        RequestMapping(metadata)
      )
  }
}