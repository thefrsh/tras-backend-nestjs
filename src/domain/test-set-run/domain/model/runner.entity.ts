import { Column, OneToMany } from 'typeorm'
import { DomainEntity } from '../../../shared-kernel'
import { BaseEntity } from '../../../shared-kernel'
import { TestSetRun } from './test-set-run.aggregate-root'

@DomainEntity({
  name: 'users'
})
export class Runner extends BaseEntity {

  @Column({
    unique: true,
    name: 'username'
  })
  runnerName: string

  @OneToMany(() => TestSetRun, (run) => run.runner)
  sets: Promise<TestSetRun[]>
}
