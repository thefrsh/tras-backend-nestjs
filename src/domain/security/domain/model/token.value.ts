import { ValueObject } from '../../../shared-kernel'

@ValueObject()
export class Token {

  constructor(
    readonly jwt: string
  ) { }
}
