import { Otherwise } from './otherwise'

export class Then<T> {

  constructor(
    private readonly condition: boolean
  ) { }

  public then(
    supplier: () => T
  ): Otherwise<T> {

    return new Otherwise(this.condition, supplier)
  }
}
