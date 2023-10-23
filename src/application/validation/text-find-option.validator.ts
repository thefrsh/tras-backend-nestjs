import { Result } from 'typescript-monads'
import { FindOptionValidator } from '../support'
import { FindOption } from '../support'

export class TextFindOptionValidator implements FindOptionValidator<FindOption, string> {

  private readonly operators: string[] = ['eq', 'neq', 'contains', 'beginsWith', 'endsWith']

  public validate(
    option: FindOption
  ): Result<FindOption, string> {

    if (!option.operator.in(this.operators)) {
      return Result.fail(
        `Parameter '${option.name}' does not support operator '${option.operator}'`
      )
    }

    if (!(option.value as string).certain()) {
      return Result.fail(`Value of parameter '${option.name}' must be text with no white characters`)
    }

    return Result.ok(option)
  }
}
