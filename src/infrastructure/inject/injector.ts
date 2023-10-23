import { ModuleRef } from '@nestjs/core'
import { BaseAggregateRoot } from '../../domain/shared-kernel'
import { EventEmitterBus } from '../event'

/**
 *
 */
export abstract class Injector<Root extends BaseAggregateRoot> {

  protected constructor(
    protected readonly ref: ModuleRef
  ) { }

  public init(
    root: Root
  ): Root {

    root.bus_ = this.ref
      .get(EventEmitterBus, {
        strict: false
      })

    return root
  }
}
