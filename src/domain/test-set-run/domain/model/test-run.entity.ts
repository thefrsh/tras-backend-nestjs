import { Column, JoinColumn, ManyToOne } from 'typeorm'
import { AutoStatus } from './auto-status.value'
import { AutoMap } from '@automapper/classes'
import { TestSetRun } from './test-set-run.aggregate-root'
import { BaseEntity } from '../../../shared-kernel'
import { DomainEntity } from '../../../shared-kernel'
import { UnixDuration } from '../../../shared-kernel'
import { TestRunAspect } from './test-run-aspect.entity'
import { LogLink } from './log-link.value'

@DomainEntity({
  name: 'test_runs'
})
export class TestRun extends BaseEntity {

  @AutoMap()
  @Column()
  name: string

  @Column(() => UnixDuration, {
    prefix: false
  })
  duration: UnixDuration

  @AutoMap()
  @Column(() => LogLink, {
    prefix: false
  })
  logLink: LogLink

  @AutoMap()
  @Column({
    type: 'varchar',
    enum: AutoStatus
  })
  autoStatus: AutoStatus

  @JoinColumn({
    name: 'test_run_aspect_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => TestRunAspect, (aspect) => aspect.runs, {
    cascade: ['insert', 'update']
  })
  aspect: TestRunAspect

  @JoinColumn({
    name: 'test_set_run_id',
    referencedColumnName: 'id'
  })
  @ManyToOne(() => TestSetRun, (run) => run.runs)
  set: TestSetRun
}
