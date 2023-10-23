import { TestReviewRepository } from './port'
import { DomainRepository } from '../../shared-kernel'
import { Repository } from 'typeorm'
import { TestReview } from './model'
import { InjectRepository } from '@nestjs/typeorm'

@DomainRepository()
export class TestReviewRepositoryAdapter extends TestReviewRepository {

  constructor(
    @InjectRepository(TestReview)
    repository: Repository<TestReview>
  ) {
    super(repository, 'Test Review')
  }
}
