import { HttpStatus, Inject, Param, ParseIntPipe, Query, RequestMethod, UseGuards, } from '@nestjs/common'
import { AuthenticationGuard } from '../../domain/security'
import { Finder } from '../../domain/shared-kernel'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AsyncResponseEntity, ResponseEntity } from '../../application'
import { HttpHeaders } from '../../application'
import { FindOptionsHost } from '../../application'
import { FindOptionsPipe } from '../../application'
import { SwaggerEndpoint } from './docs/swagger'
import { TestSetRunQueryRepository } from './test-set-run.query.repository'
import { TestSetRunProjection } from './test-set-run.projection'
import { TestSetRun } from '../../domain/test-set-run'

@ApiBearerAuth()
@ApiTags('TestSetRun')
@UseGuards(AuthenticationGuard)
@Finder({
  path: '/test-set-runs'
})
export class TestSetRunQueryController {

  constructor(
    @Inject(TestSetRunQueryRepository)
    private readonly repository: TestSetRunQueryRepository
  ) { }

  @SwaggerEndpoint({
    path: '/:id',
    method: RequestMethod.GET
  })
  public async findOneById(
    @Param('id', new ParseIntPipe()) id: number
  ): AsyncResponseEntity<TestSetRunProjection> {

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
    @Query(new FindOptionsPipe(TestSetRunProjection)) host: FindOptionsHost<TestSetRunProjection>
  ): AsyncResponseEntity<TestSetRunProjection[]> {

    const [projections, count] = await this.repository
      .findByOptions(
        host.where, host.order, host.page
      )

    const headers = new HttpHeaders()
      .set('X-Total-Count', String(count))

    return new ResponseEntity(HttpStatus.OK, projections, headers)
  }
}
