import { Injectable } from '@nestjs/common'

export function ApplicationService(): ClassDecorator {
  return Injectable()
}
