import { ValueObject } from '../../decorator'
import { Column } from 'typeorm'
import { DurationException } from './exception'
import { defined, unix } from '../../../../infrastructure'

@ValueObject()
export class UnixDuration {

  @Column({
    update: false
  })
  startDate: number

  @Column()
  endDate: number

  private constructor(
    from?: number,
    to?: number
  ) {
    this.startDate = from || unix()
    this.endDate = to
  }

  public stop(): void {

    if (defined(this.endDate)) {
      throw new DurationException('Duration has been already stopped')
    }
    this.endDate = unix()
  }

  public static now(): UnixDuration {

    return new UnixDuration()
  }

  public static between(
    from: number,
    to: number
  ): UnixDuration {

    const now = unix()

    if (from > to || to > now) {
      throw new DurationException('Incorrect time interval')
    }
    return new UnixDuration(from, to)
  }
}
