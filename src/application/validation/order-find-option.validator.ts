import { Result } from 'typescript-monads'
import { FindOptionValidator } from '../support'
import { FindOption } from '../support'

export class OrderFindOptionValidator<Resource> implements FindOptionValidator<FindOption, string> {

  private readonly operators: string[] = ['asc', 'desc']

  constructor(
    private readonly findables: Map<string, string>
  ) { }

  public validate(
    option: FindOption
  ): Result<FindOption, string> {

    if (!option.operator.in(this.operators)) {
      return Result.fail(
        `Parameter '${option.name}' does not support operator '${option.operator}'`
      )
    }

    const values = option.value.split(',')

    if (!values.every(value => this.findables.has(value))) {
      return Result.fail(
        `Value of parameter '${option.name}' must be made up of: ${Array.from(this.findables.keys())}`
      )
    }

    if (values.hasDuplicates()) {
      return Result.fail(`Values of parameter '${option.name}' cannot be duplicated`)
    }

    option.value = values

    return Result.ok(option)
  }
}
