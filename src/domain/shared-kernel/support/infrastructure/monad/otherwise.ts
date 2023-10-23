export class Otherwise<T> {

  constructor(
    private readonly condition: boolean,
    private readonly then: () => T
  ) { }

  public otherwise(
    action: () => T
  ): T {
    return this.condition ? this.then() : action()
  }
}
