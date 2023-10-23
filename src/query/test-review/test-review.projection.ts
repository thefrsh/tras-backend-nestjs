import { Projection } from '../../domain/shared-kernel'
import { ViewColumn } from 'typeorm'
import { ApiProperty } from '@nestjs/swagger'

@Projection({
  view: 'test_review_projection'
})
export class TestReviewProjection {

  @ApiProperty({
    example: 6,
    description: 'Id of the Test Review'
  })
  @ViewColumn()
  readonly id: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: ['\t2-BC_GP_Nightly\\14-tutorial-lua-PassTutorial\\PassTutorial',
              '2-BC_GP_Nightly\\15-who_are_you_popup-lua\\AvatarChange'],
    description: 'Test Run names included in the Test Review',
    isArray: true
  })
  @ViewColumn()
  readonly names: string[]

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'FAILED',
    description: 'Manual Status of the Test Review'
  })
  @ViewColumn()
  readonly status: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Test Error',
    description: 'Reason describing the purpose of the Test Review'
  })
  @ViewColumn()
  readonly reason: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'jde',
    description: 'Reviewer username'
  })
  @ViewColumn()
  readonly reviewer: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: ['https://jira.game-lion.com/browse/HCAUTO-572',
              'https://jira.game-lion.com/browse/HCAUTO-196'],
    description: 'List of Test Review Link describing details of the Test Review',
    uniqueItems: true
  })
  @ViewColumn()
  readonly links: string[]

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: true,
    description: 'Locked state of the Test Run'
  })
  @ViewColumn()
  readonly locked: boolean

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 1672644503,
    description: 'Epoch time of the creation'
  })
  @ViewColumn()
  readonly at: number
}
