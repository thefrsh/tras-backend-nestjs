import { registerDecorator, ValidationOptions } from 'class-validator'
import { ReasonExistsConstraintValidator } from '../reason-exists.constraint-validator'

export function ReasonExists(
  options?: ValidationOptions
): PropertyDecorator {

  return function(
    target: Object,
    key: string | symbol
  ): void {

    registerDecorator({
      name: 'ReasonExists',
      target: target.constructor,
      propertyName: key as string,
      options: options,
      validator: ReasonExistsConstraintValidator
    })
  }
}
