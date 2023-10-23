import { DomainRepository } from '../../shared-kernel'
import { Repository } from 'typeorm'
import { InjectRepository } from '@nestjs/typeorm'
import { TestSetRunRepository } from './port'
import { TestSetRun } from './model'

@DomainRepository()
export class TestSetRunRepositoryAdapter extends TestSetRunRepository {

  constructor(
    @InjectRepository(TestSetRun)
    repository: Repository<TestSetRun>
  ) {
    super(repository, 'Test Set Run')
  }
}
