import { Entity, EntityOptions } from 'typeorm'

export function DomainEntity(
  options?: EntityOptions
): ClassDecorator {

  return Entity(options)
}
