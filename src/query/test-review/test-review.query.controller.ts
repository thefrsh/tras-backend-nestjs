import { Finder } from '../../domain/shared-kernel'
import { HttpStatus, Param, ParseIntPipe, RequestMethod, UseGuards } from '@nestjs/common'
import { AuthenticationGuard } from '../../domain/security'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { TestReviewQueryRepository } from './test-review.query.repository'
import { AsyncResponseEntity, ResponseEntity } from '../../application'
import { TestReviewProjection } from './test-review.projection'
import { SwaggerEndpoint } from './docs/swagger'

@ApiBearerAuth()
@ApiTags('TestReview')
@UseGuards(AuthenticationGuard)
@Finder({
  path: '/test-reviews'
})
export class TestReviewQueryController {

  constructor(
    private readonly repository: TestReviewQueryRepository
  ) { }

  @SwaggerEndpoint({
    path: '/:id',
    method: RequestMethod.GET
  })
  public async findOneById(
    @Param('id', new ParseIntPipe()) id: number
  ): AsyncResponseEntity<TestReviewProjection> {

    const projection = await this.repository
      .findOneById(id)

    return new ResponseEntity(HttpStatus.OK, projection)
  }
}
