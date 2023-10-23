import { IsDefined, IsNotEmpty, IsEnum, IsPositive, IsUrl, IsOptional } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
import { AutoMap } from '@automapper/classes'
import { AutoStatus } from '../domain/model/auto-status.value'

export class CreateTestRunRequest {

  @ApiProperty({
    example: '1-HCStaging/1-tutorial-lua-PassTutorial\\PassTutorial',
    description: 'Name of the Single Test'
  })
  @AutoMap()
  @IsNotEmpty({
    message: 'Name must be defined'
  })
  readonly name: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 1671308073,
    description: 'Start Date of the Single Test as a Unix timestamp'
  })
  @AutoMap()
  @IsPositive({
    message: 'Start Date cannot be negative'
  })
  @IsDefined({
    message: 'Start Date must be defined'
  })
  readonly startDate: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 1671308093,
    description: 'End Date of the Single Test as a Unix timestamp'
  })
  @AutoMap()
  @IsPositive({
    message: 'End Date cannot be negative'
  })
  @IsDefined({
    message: 'End Date must be defined'
  })
  readonly endDate: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: [
      'https://ci.huuuge.in/repository/download/MAGICASTestsHtfDslSandboxNightlyTestsStagingBuild/',
      '2706100:id/allure-report.zip!/allure-report/index.html#suites/6383524049453ec8729ebb38b006fc50/e1c10b576d34ffa6/'
    ].join(),
    description: 'URL to logs of the Single Test',
    nullable: true
  })
  @AutoMap()
  @IsUrl({ }, {
    message: 'Invalid URL format'
  })
  @IsOptional()
  readonly logLink?: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: AutoStatus.FAILED,
    description: 'Auto Result Status of the Single Test'
  })
  @AutoMap()
  @IsEnum(AutoStatus, {
    message: 'Auto Status must be one of: ' + Object.values(AutoStatus)
  })
  @IsDefined({
    message: 'Auto Status must be defined'
  })
  readonly autoStatus: AutoStatus

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: true,
    description: 'Optional development-purposes field',
    nullable: true
  })
  readonly updated?: boolean
}
