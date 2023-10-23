import { ArgumentMetadata, BadRequestException, PipeTransform } from '@nestjs/common'
import { FindOptionsHost } from '../find-options.host'
import { FindOptionValidator } from '../find-option.validator'
import { FindOption } from '../find.option'
import { NumberFindOptionValidator } from '../../../validation'
import { TextFindOptionValidator } from '../../../validation'
import { OrderFindOptionValidator } from '../../../validation'
import { PageFindOptionValidator } from '../../../validation'
import { Optional } from '../../../../domain/shared-kernel'
import { Constructor, Dictionary } from '../../../../infrastructure'
import { BooleanFindOptionValidator } from '../../../validation'

export class FindOptionsPipe<Resource>
                        implements PipeTransform<Dictionary<string, string>, FindOptionsHost<Resource>> {

  private readonly findables: Map<string, string>
  private readonly validators: Map<string, FindOptionValidator<FindOption, string>>

  constructor(
    private readonly resource: Constructor<Resource>
  ) {
    this.findables = Reflect.getMetadata(
      '__findables__',
      this.resource
    ) as Map<string, string>

    this.validators = new Map<string, FindOptionValidator<FindOption, string>>([
      ['number', new NumberFindOptionValidator()],
      ['string', new TextFindOptionValidator()],
      ['boolean', new BooleanFindOptionValidator()],
      ['page', new PageFindOptionValidator()],
      ['order', new OrderFindOptionValidator(this.findables)]
    ])
  }

  public transform(
    parameters: Dictionary<string, string>,
    _: ArgumentMetadata
  ): FindOptionsHost<Resource> {

    const builder = FindOptionsHost
      .builder<Resource>()

    Object.keys(parameters)
      .filter(
        parameter => /^[a-zA-Z]+\.[a-zA-Z]+$/.test(parameter)
      )
      .forEach(
        parameter => {

          const value = parameters[parameter]
          const [name, operator] = parameter.split('.')

          const key = this.findables.get(name) || name

          Optional.of(this.validators.get(key))
            .map(
              validator => {
                return validator
                  .validate({ name, operator, value })
              }
            )
            .tap(
              result => {
                result
                  .mapFail(
                    fail => {
                      throw new BadRequestException(fail)
                    }
                  )
                  .tapOk(
                    option => {
                      builder.append(option)
                    }
                  )
              }
            )
        }
      )

    return builder.build()
  }
}
