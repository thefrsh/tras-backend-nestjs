import { Result } from 'typescript-monads'
import { FindOptionValidator } from '../support'
import { FindOption } from '../support'

export class PageFindOptionValidator implements FindOptionValidator<FindOption, string> {

  private readonly operators: string[] = ['index', 'size']

  public validate(
    option: FindOption
  ): Result<FindOption, string> {

    if (!option.operator.in(this.operators)) {
      return Result.fail(
        `Parameter '${option.name}' does not support operator '${option.operator}'`
      )
    }

    if (!/^[0-9]+$/.test(option.value)) {
      return Result.fail(`Value of parameter '${option.name}' must be integer`)
    }

    option.value = parseInt(option.value)

    return Result.ok(option)
  }
}
