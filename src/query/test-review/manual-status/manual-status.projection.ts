import { Projection } from '../../../domain/shared-kernel'
import { ViewColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Projection({
  view: 'manual_status_projection'
})
export class ManualStatusProjection {

  @ApiProperty({
    example: 3,
    description: 'Id of the Manual Status'
  })
  @ViewColumn()
  id: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'FAILED',
    description: 'Name of the Manual Status'
  })
  @ViewColumn()
  name: number
}
