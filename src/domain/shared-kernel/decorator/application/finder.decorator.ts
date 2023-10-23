import { Controller, ControllerOptions } from '@nestjs/common'

export function Finder(
  options: ControllerOptions
): ClassDecorator {

  return Controller(options)
}
