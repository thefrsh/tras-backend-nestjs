import { BaseEntity } from './base.entity'

/**
 * <i> Every object-oriented language provides a mechanism for creating objects (constructors in Java
 * and C++, instance creation class methods in Smalltalk, for example), but there is a need for more
 * abstract construction mechanisms that are decoupled from the other objects. A program element
 * whose responsibility is the creation of other objects is called a FACTORY.
 * Just as the interface of an object should encapsulate its implementation, thus allowing a client to
 * use the object's behavior without knowing how it works, a FACTORY encapsulates the knowledge
 * needed to create a complex object or AGGREGATE. It provides an interface that reflects the goals of
 * the client and an abstract view of the created object. </i>
 * <p>
 * Eric Evans, Domain Driven Design, 2003
 *
 * @since  0.0.1
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export interface BaseFactory<E extends BaseEntity> {

  create(...args: any[]): E | Promise<E>
}
