import { AutoStatus } from '../../domain/test-set-run/domain/model/auto-status.value'
import { ApiProperty } from '@nestjs/swagger'
import { ViewColumn } from 'typeorm'
import { Findable } from '../../application'
import { Projection } from '../../domain/shared-kernel'

@Projection({
  view: 'test_set_run_projection'
})
export class TestSetRunProjection {

  @ApiProperty({
    example: 5,
    description: 'Test Set Run identifier'
  })
  @Findable()
  @ViewColumn()
  readonly id: number

  @ApiProperty({
    example: 'nightly12122022.yml',
    description: 'Name of the Test Set Run'
  })
  @Findable()
  @ViewColumn()
  readonly name: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 1671308073,
    description: 'Start Date of the Test Set Run as a Unix timestamp'
  })
  @Findable()
  @ViewColumn()
  readonly startDate: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 1671308093,
    description: 'End Date of the Test Set Run as a Unix timestamp'
  })
  @Findable()
  @ViewColumn()
  readonly endDate: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: ['https://ci.huuuge.in/repository/download/MAGICAS_Tests_HtfDslSandbox_NightlyTestsStagingBuild/',
              '2747533:id/allure-report.zip!/allure-report/index.html'].join(),
    description: 'URL to logs of the Test Set Run'
  })
  @Findable()
  @ViewColumn()
  readonly logLink?: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: AutoStatus.PASSED,
    description: 'Result Status of the Test Set Run'
  })
  @Findable({
    as: 'string'
  })
  @ViewColumn()
  readonly status: AutoStatus

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Submission_8_11',
    description: 'Additional text field to make filtering easier'
  })
  @Findable()
  @ViewColumn()
  readonly extras?: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'jde',
    description: 'Runner\'s username'
  })
  @Findable()
  @ViewColumn()
  readonly runner: string
}
