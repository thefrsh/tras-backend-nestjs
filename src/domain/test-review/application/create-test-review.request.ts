import { ApiProperty } from '@nestjs/swagger'
import { IsBoolean, IsDefined, IsNotEmpty, IsNumber, IsPositive, IsUrl } from 'class-validator'
import { AutoMap } from '@automapper/classes'
import { UserExists } from '../../../application'
import { ManualStatusExists } from '../../../application'
import { ReasonExists } from '../../../application'
import { TestExists } from '../../../application'

export class CreateTestReviewRequest {

  @ApiProperty({
    example: 2,
    description: 'Manual Status picked by the Reviewer'
  })
  @ManualStatusExists()
  @IsNotEmpty({
    message: 'Manual Status cannot be empty'
  })
  @IsDefined({
    message: 'Manual Status must be defined'
  })
  readonly manualStatus: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 2,
    description: 'Reason id picked by the Reviewer'
  })
  @ReasonExists()
  @IsNotEmpty({
    message: 'Reason cannot be empty'
  })
  @IsDefined({
    message: 'Reason must be defined'
  })
  readonly reason: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: true,
    description: 'Decides whether the tests shall be locked'
  })
  @AutoMap()
  @IsBoolean({
    message: 'Locked parameter must be boolean'
  })
  @IsDefined({
    message: 'Locked parameter must be defined'
  })
  readonly locked: boolean

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: [7, 9, 10],
    description: 'List of the tests id for which Test Review shall be created'
  })
  @TestExists({
    each: true
  })
  @IsPositive({
    each: true,
    message: 'Test id must be a positive number'
  })
  @IsNumber({ }, {
    each: true, message: 'Test id must be number'
  })
  @IsDefined({
    message: 'List of tests id must be defined'
  })
  readonly tests: number[]

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 1,
    description: 'Reviewer id'
  })
  @UserExists()
  @IsNotEmpty({
    message: 'Reviewer cannot be empty'
  })
  @IsDefined({
    message: 'Reviewer must be defined'
  })
  readonly reviewer: string

  /* ------ */

  @ApiProperty({
    example: ['https://jira.game-lion.com/browse/HCAUTO-196'],
    description: 'List of links describing the Test Review reason, action points etc.'
  })
  @AutoMap()
  @IsUrl({ }, {
    each: true,
    message: 'Link must be a valid URL'
  })
  readonly links: string[]
}
