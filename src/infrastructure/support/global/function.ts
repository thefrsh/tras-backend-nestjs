import * as moment from 'moment'

export function unix(): number {
  return moment().utcOffset('+01:00').unix()
}

export function defined(value: any): boolean {
  return value !== undefined && value !== null
}
