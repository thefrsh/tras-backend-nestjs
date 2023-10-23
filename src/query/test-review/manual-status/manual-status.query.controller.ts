import { Finder } from '../../../domain/shared-kernel'
import { HttpStatus, Inject, Param, ParseIntPipe, RequestMethod, UseGuards } from '@nestjs/common'
import { AuthenticationGuard } from '../../../domain/security'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { ManualStatusQueryRepository } from './manual-status.query.repository'
import { AsyncResponseEntity, ResponseEntity } from '../../../application'
import { ManualStatusProjection } from './manual-status.projection'
import { SwaggerEndpoint } from './docs/swagger'

@ApiBearerAuth()
@ApiTags('TestReview')
@UseGuards(AuthenticationGuard)
@Finder({
  path: '/test-reviews/manual-statuses'
})
export class ManualStatusQueryController {

  constructor(
    @Inject(ManualStatusQueryRepository)
    private readonly repository: ManualStatusQueryRepository
  ) { }

  @SwaggerEndpoint({
    path: '/:id',
    method: RequestMethod.GET
  })
  public async findOneById(
    @Param('id', new ParseIntPipe()) id: number
  ): AsyncResponseEntity<ManualStatusProjection> {

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
  public async findAll(
  ): AsyncResponseEntity<ManualStatusProjection[]> {

    const projections = await this.repository
      .findAll()

    return new ResponseEntity(HttpStatus.OK, projections)
  }
}
