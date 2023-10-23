import { AutoStatus } from '../domain/model/auto-status.value'
import { ApiProperty } from '@nestjs/swagger'
import { AutoMap } from '@automapper/classes'
import { Type } from 'class-transformer'
import { UserExists } from '../../../application'
import {
  ArrayUnique, IsArray, IsDefined, IsEnum, IsNotEmpty,
  IsOptional, IsPositive, IsUrl, NotContains, ValidateNested
} from 'class-validator'
import { CreateTestRunRequest } from './create-test-run.request'

export class CreateTestSetRunRequest {

  @ApiProperty({
    example: 'nightly12122022.yml',
    description: 'Name of the Test Set'
  })
  @AutoMap()
  @IsNotEmpty({
    message: 'Name must be defined'
  })
  readonly name: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 1671308073,
    description: 'Start Date of the Test Set as a Unix timestamp'
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
    description: 'End Date of the Test Set as a Unix timestamp'
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
    example: ['https://ci.huuuge.in/repository/download/MAGICASTestsHtfDslSandboxNightlyTestsStagingBuild/',
              '2706100:id/allure-report.zip!/allure-report/index.html'].join(),
    description: 'URL to logs of the Test Set',
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
    example: AutoStatus.RUNNING,
    description: 'Result Status of the Test Set'
  })
  @AutoMap()
  @IsEnum(AutoStatus, { message: 'Status must be one of: ' + Object.values(AutoStatus) })
  @IsDefined({ message: 'Status must be defined' })
  readonly status: AutoStatus

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Submission811',
    description: 'Additional text field to make filtering easier',
    nullable: true
  })
  @AutoMap()
  @IsOptional()
  readonly extras?: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'jde',
    description: 'Runner\'s username'
  })
  @UserExists()
  @NotContains(' ', { message: 'Runner Name cannot contain white characters' })
  @IsNotEmpty({ message: 'Runner Name must be defined' })
  readonly runnerName: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: [CreateTestRunRequest],
    description: 'List of Single Tests executed within the Test Set context'
  })
  @ArrayUnique(test => test.name, {
    message: 'Single Tests cannot be duplicated'
  })
  @IsArray({
    message: 'Single Tests must be an array'
  })
  @IsDefined({
    message: 'Single Tests must be defined'
  })
  @ValidateNested({
    each: true
  })
  @Type(() => CreateTestRunRequest)
  readonly tests: CreateTestRunRequest[]
}
