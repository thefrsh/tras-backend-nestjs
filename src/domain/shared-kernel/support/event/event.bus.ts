import { Event } from './event'

export interface EventBus {

  cast<T>(event: Event<T>): Promise<void>
}
