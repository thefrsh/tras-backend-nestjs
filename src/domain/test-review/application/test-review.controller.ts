import { Body, Controller, HttpStatus, Inject, Req, RequestMethod, UseGuards } from '@nestjs/common'
import { TestReviewApplicationService } from './test-review.application.service'
import { AsyncResponseEntity, ResponseEntity } from '../../../application'
import { HttpHeaders } from '../../../application'
import { SwaggerEndpoint } from './docs/swagger'
import { Request } from 'express'
import { AuthenticationGuard } from '../../security'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { CreateTestReviewRequest } from './create-test-review.request'

@ApiBearerAuth()
@ApiTags('TestReview')
@UseGuards(AuthenticationGuard)
@Controller({
  path: '/test-reviews'
})
export class TestReviewController {

  constructor(
    @Inject(TestReviewApplicationService)
    private readonly service: TestReviewApplicationService
  ) { }

  @SwaggerEndpoint({
    path: '/',
    method: RequestMethod.POST
  })
  public async create(
    @Body() request: CreateTestReviewRequest,
    @Req() req: Request
  ): AsyncResponseEntity<void> {

    const id = await this.service
      .create(request)

    const location = req.url + '/' + id

    const headers = new HttpHeaders()
      .set(HttpHeaders.LOCATION, location)

    return new ResponseEntity(HttpStatus.CREATED, undefined, headers)
  }
}
