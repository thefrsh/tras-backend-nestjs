import {
  Between, Equal, FindOperator, FindOptionsOrder, FindOptionsWhere,
  LessThan, LessThanOrEqual, Like, MoreThan, MoreThanOrEqual, Not
} from 'typeorm'
import { PageOptions } from './page.options'
import { FindOption } from './find.option'
import { FindOptionsHost } from './find-options.host'

export class FindOptionsHostBuilder<Resource> {

  private readonly where: FindOptionsWhere<Resource>
  private readonly order: FindOptionsOrder<Resource>
  private readonly page: PageOptions
  private readonly conditions: Map<string, (...args: any) => FindOperator<any>>

  constructor() {
    this.where = { }
    this.order = { }
    this.page = { }

    this.conditions = new Map([
      ['eq', Equal],
      ['neq', Not],
      ['lt', LessThan],
      ['ltoe', LessThanOrEqual],
      ['gt', MoreThan],
      ['gtoe', MoreThanOrEqual],
      ['after', MoreThan],
      ['before', LessThan],
      ['dateRange', (values: number[]) => Between(values.first(), values.last())],
      ['numberRange', (values: number[]) => Between(values.first(), values.last())],
      ['contains', (value: string) => Like('%' + value + '%')],
      ['beginsWith', (value: string) => Like(value + '%')],
      ['endsWith', (value: string) => Like('%' + value)]
    ])
  }

  public append(
    option: FindOption
  ): void {

    switch (option.name) {

      case 'order':
        (option.value as string[])
          .forEach(
            property => {
              this.order[property] = option.operator
            }
          )
        break

      case 'page':
        this.page[option.operator] = option.value
        break

      default:
        this.where[option.name] = this.conditions.get(option.operator)(option.value)
        break
    }
  }

  public build(): FindOptionsHost<Resource> {

    return new FindOptionsHost<Resource>(
      this.where, this.order, this.page
    )
  }
}
