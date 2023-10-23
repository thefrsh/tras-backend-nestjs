import { Injectable } from '@nestjs/common'

export function DomainService(): ClassDecorator {
  return Injectable()
}
