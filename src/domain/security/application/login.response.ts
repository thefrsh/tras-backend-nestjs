import { ApiProperty } from '@nestjs/swagger'

export class LoginResponse {

  @ApiProperty({
    example: 1,
    description: 'ID of the current User'
  })
  readonly id: number

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: 'abc',
    description: 'Username of the current user'
  })
  readonly username: string

  /* --------------------------------------------------------------- */

  @ApiProperty({
    example: [
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXV',
      'CJ9.eyJfaWQiOjEsIl91c2VybmFtZSI6I',
      'm1ybiIsIl9wYXNzd29yZCI6IiQyYiQxMC',
      'REekhkYlRQWDN2UHgzUzJQcmFsSlFlSWh',
      'Wekh4ODZiVEJ5bE9mZm8zbDJOeVlaOHEz',
      'cExvQyIsImlhdCI6MTY3MTExODI4OCwiZ',
      'XhwIjoxNjcxMTIxODg4fQ.0vb7Eip4Ijt',
      'opSSglFwm3gAp7YzZMMxPDXcpKQW5R0'
    ].join(),
    description: 'JSON Web Token as a result of the successful authentication'
  })
  readonly token: string

  /* --------------------------------------------------------------- */

  constructor(
    id: number,
    username: string,
    token: string
  ) {
    this.id = id
    this.username = username
    this.token = token
  }
}
