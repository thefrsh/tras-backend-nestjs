import { Projection } from '../../../domain/shared-kernel'
import { ReasonProjection } from '../reason'
import { ViewColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Projection({
  view: 'reason_category_projection'
})
export class ReasonCategoryProjection {

  @ApiProperty({
    example: 4,
    description: 'Id of the Reason Category'
  })
  @ViewColumn()
  id: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Infrastructure',
    description: 'Name of the Reason Category'
  })
  @ViewColumn()
  name: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Servers, CI/CD and Environments-related errors',
    description: 'Short description intended to clarify a category context'
  })
  @ViewColumn()
  description: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    description: 'Reason items included in the Reason Category',
    isArray: true
  })
  @ViewColumn()
  reasons: ReasonProjection[]
}
