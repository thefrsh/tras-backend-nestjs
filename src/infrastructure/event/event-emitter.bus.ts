import { EventBus } from '../../domain/shared-kernel'
import { Inject, Injectable } from '@nestjs/common'
import { Event } from '../../domain/shared-kernel'
import { EventEmitter2 } from '@nestjs/event-emitter'

@Injectable()
export class EventEmitterBus implements EventBus {

  constructor(
    @Inject(EventEmitter2)
    private readonly emitter: EventEmitter2
  ) { }

  public async cast<T>(
    event: Event<T>
  ): Promise<void> {
    
    await this.emitter
      .emitAsync(event.name, event.payload)
  }
}
