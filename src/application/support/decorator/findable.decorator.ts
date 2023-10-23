import { defined } from '../../../infrastructure'

export type FindableType = 'number' | 'string' | 'boolean'

export function Findable(
  options?: {
    as: FindableType
  }
): PropertyDecorator {

  return function (
    target: Object,
    key: string | symbol
  ): void {

    let findables = Reflect.getMetadata(
      '__findables__',
      target.constructor
    ) as Map<string, string>

    if (!defined(findables)) {

      Reflect.defineMetadata(
        '__findables__',
        findables = new Map<string, string>(),
        target.constructor
      )
    }

    const type = defined(options)
      ? options.as
      : (Reflect.getMetadata('design:type', target, key) as Function).name

    findables.set(key as string, (type as string).toLowerCase())
  }
}
