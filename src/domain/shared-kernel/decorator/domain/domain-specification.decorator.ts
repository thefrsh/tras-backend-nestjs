import { Injectable } from '@nestjs/common'

export function DomainSpecification(): ClassDecorator {
  return Injectable()
}
