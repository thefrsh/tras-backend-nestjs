import { registerDecorator, ValidationOptions } from 'class-validator'
import { UserExistsConstraintValidator } from '../user-exists.constraint-validator'

export function UserExists(
  options?: ValidationOptions
): PropertyDecorator {

  return function (
    target: Object,
    key: string | symbol
  ): void {

    registerDecorator({
      name: 'UserExists',
      target: target.constructor,
      propertyName: key as string,
      options: options,
      validator: UserExistsConstraintValidator
    })
  }
}
