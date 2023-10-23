import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { randomUUID } from 'crypto'

@Entity()
export abstract class BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @Column({
    nullable: false,
    update: false,
    unique: true
  })
  uuid: string

  constructor() {

    this.uuid = randomUUID()
  }

  public equals<T extends BaseEntity>(
    that: T
  ): boolean {

    return this.uuid === that.uuid
  }
}
