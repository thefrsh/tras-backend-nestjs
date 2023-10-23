import { Result } from 'typescript-monads'
import { FindOption } from './find.option'

export interface FindOptionValidator<O, F> {

  validate(option: FindOption): Result<O, F>
}
