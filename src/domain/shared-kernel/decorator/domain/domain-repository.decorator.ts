import { Injectable } from '@nestjs/common'

export function DomainRepository(): ClassDecorator {
  return Injectable()
}
