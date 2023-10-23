import { Column, OneToMany } from 'typeorm'
import { DomainEntity } from '../../../shared-kernel'
import { TestRun } from './test-run.entity'
import { BaseEntity } from '../../../shared-kernel'

@DomainEntity({
  name: 'test_run_aspects'
})
export class TestRunAspect extends BaseEntity {

  constructor(
    name: string
  ) { super()
    this.name = name
  }

  @Column({
    unique: true,
    update: false
  })
  name: string

  @OneToMany(() => TestRun, (run) => run.aspect)
  runs: Promise<TestRun[]>
}
