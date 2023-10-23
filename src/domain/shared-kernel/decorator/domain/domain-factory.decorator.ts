import { Injectable } from '@nestjs/common'

export function DomainFactory(): ClassDecorator {
  return Injectable()
}
