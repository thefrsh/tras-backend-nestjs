import { Throws } from '../../../../../infrastructure'
import { defined } from '../../../../../infrastructure'

export class Optional<T> {

  private constructor(
    private readonly nullable: T
  ) { }

  public static of<T>(
    nullable: T
  ): Optional<T> {

    return new Optional<T>(nullable)
  }

  public map<M>(
    mapper: (nullable: T) => M
  ): Optional<M> {

    const nullable = defined(this.nullable) ?
      mapper(this.nullable) : null

    return new Optional<M>(nullable)
  }

  public tap(
    runnable: (nullable: T) => void
  ): void {

    if (defined(this.nullable)) {
      runnable(this.nullable)
    }
  }

  public tapOrThrow<E extends Error>(
    supplier: () => E
  ): T | Throws<E> {

    if (defined(this.nullable)) {
      return this.nullable
    }
    throw supplier()
  }

  public tapOrCreate(
    supplier: () => T
  ): T {

    return this.nullable || supplier()
  }
}
