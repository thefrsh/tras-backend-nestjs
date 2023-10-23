import { Injectable } from '@nestjs/common'

export function InfrastructureService(): ClassDecorator {
  return Injectable()
}
