import { Finder } from '../../../domain/shared-kernel'
import { HttpStatus, Inject, Param, ParseIntPipe, RequestMethod, UseGuards } from '@nestjs/common'
import { AuthenticationGuard } from '../../../domain/security'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { ReasonCategoryQueryRepository } from './reason-category.query.repository'
import { AsyncResponseEntity, ResponseEntity } from '../../../application'
import { ReasonCategoryProjection } from './reason-category.projection'
import { SwaggerEndpoint } from './docs/swagger'

@ApiBearerAuth()
@ApiTags('TestReview')
@UseGuards(AuthenticationGuard)
@Finder({
  path: '/test-reviews/reason-categories'
})
export class ReasonCategoryQueryController {

  constructor(
    @Inject(ReasonCategoryQueryRepository)
    private readonly repository: ReasonCategoryQueryRepository
  ) { }

  @SwaggerEndpoint({
    path: '/:id',
    method: RequestMethod.GET
  })
  public async findOneById(
    @Param('id', new ParseIntPipe()) id: number
  ): AsyncResponseEntity<ReasonCategoryProjection> {

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
  ): AsyncResponseEntity<ReasonCategoryProjection[]> {

    const projections = await this.repository
      .findAll()

    return new ResponseEntity(HttpStatus.OK, projections)
  }
}
