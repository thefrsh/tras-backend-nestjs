import { FindOptionValidator } from '../support'
import { FindOption } from '../support'
import { Result } from 'typescript-monads'

export class BooleanFindOptionValidator implements FindOptionValidator<FindOption, string> {

  private readonly operators = ['eq', 'neq']

  public validate(
    option: FindOption
  ): Result<FindOption, string> {

    if (!option.operator.in(this.operators)) {
      return Result.fail(
        `Parameter '${option.name}' does not support operator '${option.operator}'`
      )
    }

    if (!(option.value as string).in(['true', 'false'])) {
      return Result.fail(`Value of parameter '${option.name}' must be boolean`)
    }

    option.value = Boolean(option.value)

    return Result.ok(option)
  }
}
