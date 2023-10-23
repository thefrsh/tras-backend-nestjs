import { Column, JoinColumn, ManyToOne, OneToMany } from 'typeorm'
import { AutoStatus } from './auto-status.value'
import { Runner } from './runner.entity'
import { DomainAggregateRoot } from '../../../shared-kernel'
import { AutoMap } from '@automapper/classes'
import { BaseAggregateRoot } from '../../../shared-kernel'
import { TestRun } from './test-run.entity'
import { UnixDuration } from '../../../shared-kernel'
import { LogLink } from './log-link.value'

@DomainAggregateRoot({
  name: 'test_set_runs'
})
export class TestSetRun extends BaseAggregateRoot {

  @AutoMap()
  @Column()
  name: string

  @Column(() => UnixDuration, {
    prefix: false
  })
  duration: UnixDuration

  @Column(() => LogLink, {
    prefix: false
  })
  logLink: LogLink

  @AutoMap()
  @Column({
    type: 'varchar',
    enum: AutoStatus
  })
  status: AutoStatus

  @AutoMap()
  @Column({
    nullable: true
  })
  extras: string

  @JoinColumn({
    name: 'runner_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => Runner, (runner) => runner.sets)
  @AutoMap(() => Runner)
  runner: Runner

  @OneToMany(() => TestRun, (run) => run.set, {
    cascade: true
  })
  runs: Promise<TestRun[]>
}
