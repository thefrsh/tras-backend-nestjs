import { ApiProperty } from '@nestjs/swagger'
import { HttpStatus } from '@nestjs/common'

export class ErrorResponse {

  @ApiProperty({
    example: HttpStatus.UNAUTHORIZED,
    description: 'HTTP Response Code'
  })
  readonly statusCode: number

  @ApiProperty({
    example: 'Incorrect credentials',
    description: 'Detailed message about the error'
  })
  readonly message: string

  constructor(
    statusCode: number,
    message: string
  ) {
    this.statusCode = statusCode
    this.message = message
  }
}
