import { BaseEntity } from '../../domain'
import { FindOptionsWhere, Repository } from 'typeorm'
import { ResourceNotFoundException } from '../../../../../infrastructure'
import { Optional } from '../monad'
import { Throws } from '../../../../../infrastructure'

/**
 * <i> A REPOSITORY represents all objects of a certain type as a conceptual set (usually emulated). It
 * acts like a collection, except with more elaborate querying capability. Objects of the appropriate
 * type are added and removed, and the machinery behind the REPOSITORY inserts them or deletes
 * them from the database. This definition gathers a cohesive set of responsibilities for providing
 * access to the roots of AGGREGATES from early life cycle through the end. </i>
 * <p>
 * Eric Evans, Domain Driven Design, 2003
 *
 * @since  0.0.1
 * @author <a href="mailto:michal.broniewicz@huuugegames.com">mrn</a>
 */
export abstract class BaseRepository<T extends BaseEntity> {

  protected constructor(
    protected readonly repository: Repository<T>,
    protected readonly name: string
  ) { }

  /**
   * Returns an instance of the Aggregate Root defined by search criteria
   *
   * @param  where Search criteria of the sought-after Aggregate Root
   * @return Persisted instance of the Aggregate Root
   * @throws {@link ResourceNotFoundException} In case of the requested Aggregate Root is not found
   */
  public async load(
    where: FindOptionsWhere<T>
  ): Promise<T> | Throws<ResourceNotFoundException> {

    const entity = await this.repository
      .findOneBy(where)

    return Optional.of(entity)
      .tapOrThrow(
        () => new ResourceNotFoundException(this.name + ' is not found')
      )
  }

  public async loadMany(
    where: FindOptionsWhere<T>
  ): Promise<T[]> {

    return this.repository
      .findBy(where)
  }

  public async save(
    entity: T
  ): Promise<number> {

    const persisted = await this.repository
      .save(entity)

    return persisted.id
  }
}
