import { IsNotEmpty, Matches, MinLength, NotContains } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class LoginRequest {

  @ApiProperty({
    example: 'abc',
    description: 'Username credential'
  })
  @MinLength(3, {
    message: 'Username must be at least 3 characters long'
  })
  @NotContains(' ', {
    message: 'Username cannot contain white characters'
  })
  @IsNotEmpty({
    message: 'Username cannot be empty'
  })
  readonly username: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'Strong#password123',
    description: 'Password credential'
  })
  @NotContains(' ', {
    message: 'Password cannot contain white characters'
  })
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*@#$%^!&+=])[0-9a-zA-Z*@#$%^!&+=]{8,}$/, {
    message: 'Password must contain: at least one lower letter, one upper letter, one number and one special character'
  })
  @MinLength(8, {
    message: 'Password must be at least 8 characters long'
  })
  @IsNotEmpty({
    message: 'Password cannot be empty'
  })
  readonly password: string
}
