import { BaseEntity } from './base.entity'
import { Entity } from 'typeorm'
import { EventBus } from '../event'

/**
 * <i> An AGGREGATE is a cluster of associated objects that we treat as a unit for the purpose of data changes.
 * Each AGGREGATE has a root and a boundary. The boundary defines what is inside the AGGREGATE.
 * The root is a single, specific ENTITY contained in the AGGREGATE. The root is the only member of the
 * AGGREGATE that outside objects are allowed to hold references to, although objects within the
 * boundary may hold references to each other. ENTITIES other than the root have local identity, but
 * that identity needs to be distinguishable only within the AGGREGATE, because no outside object can
 * ever see it out of the context of the root ENTITY. </i>
 * <p>
 * Eric Evans, Domain Driven Design, 2003
 *
 * @since  0.0.1
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
@Entity()
export abstract class BaseAggregateRoot extends BaseEntity {

  protected bus: EventBus

  public set bus_(
    bus: EventBus
  ) {
    this.bus = bus
  }
}
