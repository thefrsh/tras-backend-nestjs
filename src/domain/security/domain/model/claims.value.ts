import { ValueObject } from '../../../shared-kernel'

@ValueObject()
export class Claims {

  constructor(
    readonly id: number,
    readonly username: string,
    readonly password: string
  ) { }

  public asPlain(): Object {

    return Object.assign({ }, this)
  }
}
