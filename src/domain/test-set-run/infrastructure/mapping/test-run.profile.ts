import { AutomapperProfile, InjectMapper } from '@automapper/nestjs'
import { Injectable } from '@nestjs/common'
import { createMap, forMember, mapFrom, Mapper, MappingProfile } from '@automapper/core'
import { TestRun } from '../../domain'
import { UnixDuration } from '../../../shared-kernel'
import { CreateTestRunRequest } from '../../application'
import { LogLink } from '../../domain'

@Injectable()
export class TestRunProfile extends AutomapperProfile {

  constructor(
    @InjectMapper()
    mapper: Mapper
  ) {
    super(mapper)
  }

  public override get profile(): MappingProfile {

    return mapper => {
      createMap(mapper, CreateTestRunRequest, TestRun,
        forMember(
          (run: TestRun) => run.duration,
          mapFrom(request => UnixDuration
            .between(
              request.startDate,
              request.endDate
            ))
        ),
        forMember(
          (run: TestRun) => run.logLink,
          mapFrom(request => LogLink.of(request.logLink))
        )
      )
    }
  }
}
