import { FindOptionsOrder, FindOptionsWhere, Repository } from 'typeorm'
import { Optional } from '../infrastructure'
import { ResourceNotFoundException } from '../../../../infrastructure'
import { PageOptions } from '../../../../application'
import { defined } from '../../../../infrastructure'

export abstract class BaseQueryRepository<Projection> {

  protected constructor(
    protected readonly repository: Repository<Projection>,
    protected readonly name: string
  ) { }

  public async findOneById(
    id: number
  ): Promise<Projection> {

    const projection = await this.repository
      .createQueryBuilder()
      .where('id = :id', {
        id: id
      })
      .getOne()

    return Optional.of(projection)
      .tapOrThrow(
        () => new ResourceNotFoundException(this.name + ' with id ' + id + ' is not found')
      )
  }

  public async findByOptions(
    where: FindOptionsWhere<Projection>,
    order: FindOptionsOrder<Projection>,
    page: PageOptions
  ): Promise<[Projection[], number]> {

    return this.repository.findAndCount({
      where: where,
      order: order,
      take: page.size,
      skip: (defined(page.size) .and (defined(page.index)))
        ? page.size * page.index
        : undefined
    })
  }

  public async findAll(): Promise<Projection[]> {

    return this.repository.find()
  }
}
