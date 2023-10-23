import { Body, Controller, HttpStatus, Inject, ParseArrayPipe, Req, RequestMethod, UseGuards } from '@nestjs/common'
import { AuthenticationGuard } from '../../security'
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger'
import { AsyncResponseEntity, ResponseEntity } from '../../../application'
import { HttpHeaders } from '../../../application'
import { Request } from 'express'
import { SwaggerEndpoint } from './docs/swagger'
import { CreateTestSetRunRequest } from './create-test-set-run.request'
import { TestSetRunApplicationService } from './test-set-run.application.service'

@ApiBearerAuth()
@ApiTags('TestSetRun')
@UseGuards(AuthenticationGuard)
@Controller({
  path: '/test-set-runs'
})
export class TestSetRunController {

  constructor(
    @Inject(TestSetRunApplicationService)
    private readonly service: TestSetRunApplicationService
  ) { }

  @SwaggerEndpoint({
    path: '/',
    method: RequestMethod.POST
  })
  public async create(
    @Req() req: Request,
    @Body(new ParseArrayPipe({
      items: CreateTestSetRunRequest
    }))
    requests: CreateTestSetRunRequest[]
  ): AsyncResponseEntity<void> {

    const links = requests
      .map(
        request => {
          return this.service.create(request)
        }
      )
      .reduce(
        (links, promise) => {
          promise.then(
            id => {
              const link = req.url + '/' + id
              links.push(link)
            }
          )
          return links
        }, []
      )

    const headers = new HttpHeaders()
      .set(HttpHeaders.LOCATION, links.join())

    return new ResponseEntity(HttpStatus.CREATED, undefined, headers)
  }
}
