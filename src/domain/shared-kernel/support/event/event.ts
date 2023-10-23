import { unix } from '../../../../infrastructure'

export class Event<T> {

  readonly at = unix()

  constructor(
    readonly name: string,
    readonly payload: T
  ) { }
}
