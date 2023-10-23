import { Finder } from '../../domain/shared-kernel'
import { HttpStatus, Inject, Param, ParseIntPipe, Query, RequestMethod, UseGuards } from '@nestjs/common'
import { AuthenticationGuard } from '../../domain/security'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { TestRunQueryRepository } from './test-run.query.repository'
import { AsyncResponseEntity, ResponseEntity } from '../../application'
import { TestRunProjection } from './test-run.projection'
import { SwaggerEndpoint } from './docs/swagger'
import { FindOptionsPipe } from '../../application'
import { FindOptionsHost } from '../../application'
import { HttpHeaders } from '../../application'

@ApiBearerAuth()
@ApiTags('TestRun')
@UseGuards(AuthenticationGuard)
@Finder({
  path: '/test-runs'
})
export class TestRunQueryController {

  constructor(
    @Inject(TestRunQueryRepository)
    private readonly repository: TestRunQueryRepository
  ) { }

  @SwaggerEndpoint({
    path: '/:id',
    method: RequestMethod.GET
  })
  public async findOneById(
    @Param('id', new ParseIntPipe()) id: number
  ): AsyncResponseEntity<TestRunProjection> {

    const projection = await this.repository
      .findOneById(id)

    return new ResponseEntity(HttpStatus.OK, projection)
  }

  /*
    ===============================================================================================================
  */

  @SwaggerEndpoint({
    path: '/',
    method: RequestMethod.GET
  })
  public async findByOptions(
    @Query(new FindOptionsPipe(TestRunProjection)) host: FindOptionsHost<TestRunProjection>
  ): AsyncResponseEntity<TestRunProjection[]> {

    const [projections, count] = await this.repository
      .findByOptions(host.where, host.order, host.page)

    const headers = new HttpHeaders()
      .set('X-Total-Count', String(count))

    return new ResponseEntity(HttpStatus.OK, projections, headers)
  }
}
