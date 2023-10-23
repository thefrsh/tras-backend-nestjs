import { Finder } from '../../../domain/shared-kernel'
import { HttpStatus, Inject, Param, ParseIntPipe, RequestMethod, UseGuards } from '@nestjs/common'
import { AuthenticationGuard } from '../../../domain/security'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { ReasonQueryRepository } from './reason.query.repository'
import { ReasonProjection } from './reason.projection'
import { SwaggerEndpoint } from './docs/swagger'
import { AsyncResponseEntity, ResponseEntity } from '../../../application'

@ApiBearerAuth()
@ApiTags('TestReview')
@UseGuards(AuthenticationGuard)
@Finder({
  path: '/test-reviews/reason-categories'
})
export class ReasonQueryController {

  constructor(
    @Inject(ReasonQueryRepository)
    private readonly repository: ReasonQueryRepository
  ) { }

  @SwaggerEndpoint({
    path: '/reasons/:id',
    method: RequestMethod.GET
  })
  public async findOneById(
    @Param('id', new ParseIntPipe()) id: number
  ): AsyncResponseEntity<ReasonProjection> {

    const projection = await this.repository
      .findOneById(id)

    return new ResponseEntity(HttpStatus.OK, projection)
  }
}
