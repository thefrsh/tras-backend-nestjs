import { Projection } from '../../../domain/shared-kernel'
import { ViewColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Projection({
  view: 'reason_projection'
})
export class ReasonProjection {

  @ApiProperty({
    example: 9,
    description: 'Id of the Reason'
  })
  @ViewColumn()
  id: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Test Error',
    description: 'Name of the Reason',
  })
  @ViewColumn()
  name: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Incorrect Lua test implementation',
    description: 'Short description inteded to clarify the Reason context',
  })
  @ViewColumn()
  description: string
}
