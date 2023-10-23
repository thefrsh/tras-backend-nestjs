import { registerDecorator, ValidationOptions } from 'class-validator'
import { ManualStatusExistsConstraintValidator } from '../manual-status-exists.constraint-validator'

export function ManualStatusExists(
  options?: ValidationOptions
): PropertyDecorator {

  return function (
    target: Object,
    key: string | symbol
  ): void {

    registerDecorator({
      name: 'ManualStatusExists',
      target: target.constructor,
      propertyName: key as string,
      options: options,
      validator: ManualStatusExistsConstraintValidator
    })
  }
}
