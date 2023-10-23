import { Entity, EntityOptions } from 'typeorm'

export function DomainAggregateRoot(
  options?: EntityOptions
): ClassDecorator {

  return Entity(options)
}
