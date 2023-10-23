import { AutomapperProfile, InjectMapper } from '@automapper/nestjs'
import { Injectable } from '@nestjs/common'
import { createMap, forMember, mapFrom, Mapper, MappingProfile } from '@automapper/core'
import { TestSetRun } from '../../domain'
import { UnixDuration } from '../../../shared-kernel'
import { CreateTestSetRunRequest } from '../../application'
import { LogLink } from '../../domain'

@Injectable()
export class TestSetProfile extends AutomapperProfile {

  constructor(
    @InjectMapper()
    mapper: Mapper
  ) {
    super(mapper)
  }

  public override get profile(): MappingProfile {

    return mapper => {
      createMap(mapper, CreateTestSetRunRequest, TestSetRun,
        forMember(
          (run: TestSetRun) => run.duration,
          mapFrom(request => UnixDuration
            .between(
              request.startDate,
              request.endDate
            ))
        ),
        forMember(
          (run: TestSetRun) => run.logLink,
          mapFrom(request => LogLink.of(request.logLink))
        )
      )
    }
  }
}
