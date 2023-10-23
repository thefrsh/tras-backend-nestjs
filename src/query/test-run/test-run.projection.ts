import { Projection } from '../../domain/shared-kernel'
import { Findable } from '../../application'
import { ApiProperty } from '@nestjs/swagger'
import { AutoStatus } from '../../domain/test-set-run/domain/model/auto-status.value'
import { ViewColumn } from 'typeorm'

@Projection({
  view: 'test_run_projection'
})
export class TestRunProjection {

  @ApiProperty({
    example: 5,
    description: 'Test Run indentifier'
  })
  @Findable()
  @ViewColumn()
  id: number
  
  @ApiProperty({
    example: '\t1-HC_GP_Nightly\\3-clubs-lua-Clubs\\Clubs',
    description: 'Name of the Test Run'
  })
  @Findable()
  @ViewColumn()
  name: number

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
              '2747533:id/allure-report.zip!/allure-report/index.html#suites/db9b85120513274ced81c6489aad8a97/',
              'a2d1d7af1e846d69/'].join(),
    description: 'URL of logs of the Test Run',
    nullable: true
  })
  @Findable()
  @ViewColumn()
  logLink: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: AutoStatus.FAILED,
    description: 'Auto Status of the Test Run'
  })
  @Findable({
    as: 'string'
  })
  @ViewColumn()
  autoStatus: AutoStatus

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'PASSED',
    description: 'Manual Status of the Test Run',
    nullable: true
  })
  @Findable({
    as: 'string'
  })
  @ViewColumn()
  manualStatus: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'TEST_ENV_ERROR',
    description: 'Reason of the associated Test Review',
    nullable: true
  })
  @Findable({
    as: 'string'
  })
  @ViewColumn()
  reason: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'jde',
    description: 'Reviewer of the Test Run',
    nullable: true
  })
  @Findable({
    as: 'string'
  })
  @ViewColumn()
  reviewer: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: ['https://jira.game-lion.com/browse/HCAUTO-572',
              'https://jira.game-lion.com/browse/HCAUTO-196'],
    description: 'List of links describing the associated Test Review',
    nullable: true,
    isArray: true
  })
  @Findable()
  @ViewColumn()
  links: string[]

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: true,
    description: 'Locked state of the Test Run'
  })
  @Findable({
    as: 'boolean'
  })
  @ViewColumn()
  locked: boolean
}
