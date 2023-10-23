import { ViewEntity } from 'typeorm'

export function Projection(
  options: {
    view: string
  }
): ClassDecorator {

  return ViewEntity({
    name: options.view
  })
}
