import { AutomapperProfile, InjectMapper } from '@automapper/nestjs'
import { createMap, Mapper } from '@automapper/core'
import { TestReview } from '../../domain'
import { Injectable } from '@nestjs/common'
import { CreateTestReviewRequest } from '../../application'

@Injectable()
export class TestReviewProfile extends AutomapperProfile {

  constructor(
    @InjectMapper()
    mapper: Mapper
  ) {
    super(mapper)
  }

  public override get profile() {

    return mapper => {
      createMap(
        mapper, CreateTestReviewRequest, TestReview
      )
    }
  }
}
