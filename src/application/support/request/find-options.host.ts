import { FindOptionsOrder, FindOptionsWhere, } from 'typeorm'
import { PageOptions } from './page.options'
import { FindOptionsHostBuilder } from './find-options.host-builder'

export class FindOptionsHost<Resource> {

  constructor(
    readonly where: FindOptionsWhere<Resource>,
    readonly order: FindOptionsOrder<Resource>,
    readonly page: PageOptions
  ) { }

  public static builder<R>(): FindOptionsHostBuilder<R> {
    return new FindOptionsHostBuilder<R>()
  }
}
