import { registerDecorator, ValidationOptions } from 'class-validator'
import { TestExistsConstraintValidator } from '../test-exists.constraint-validator'

export function TestExists(
  options?: ValidationOptions
): PropertyDecorator {

  return function(
    target: Object,
    key: string | symbol
  ): void {

    registerDecorator({
      name: 'TestExists',
      target: target.constructor,
      propertyName: key as string,
      options: options,
      validator: TestExistsConstraintValidator
    })
  }
}
