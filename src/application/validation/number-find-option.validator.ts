import { Result } from 'typescript-monads'
import { FindOptionValidator } from '../support'
import { FindOption } from '../support'

export class NumberFindOptionValidator implements FindOptionValidator<FindOption, string> {

  private readonly operators: string[] = [
    'eq', 'neq', 'lt', 'ltoe', 'gt', 'gtoe', 'numberRange', 'dateRange', 'after', 'before'
  ]

  public validate(
    option: FindOption
  ): Result<FindOption, string> {

    if (!option.operator.in(this.operators)) {
      return Result.fail(
        `Parameter '${option.name}' does not support operator '${option.operator}'`
      )
    }

    if (option.operator.in(['dateRange', 'numberRange'])) {

      if (!/^[0-9]+,[0-9]+$/.test(option.value)) {
        return Result.fail(
          `Value of parameter '${option.name}' must be a pair of 
           integers if the requested operator is '${option.operator}'`
        )
      }
      else {
        option.value = option.value.split(',')
      }
    }
    else {

      if (!/^[0-9]+$/.test(option.value)) {
        return Result.fail(
          `Value of parameter '${option.name}' must be integer if the requested operator is '${option.operator}'`
        )
      }
    }

    return Result.ok(option)
  }
}
