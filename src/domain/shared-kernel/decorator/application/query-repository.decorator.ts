import { Injectable } from '@nestjs/common'

export function QueryRepository(): ClassDecorator {
  return Injectable()
}
