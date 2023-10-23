import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import { initializeTransactionalContext } from 'typeorm-transactional'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { useContainer } from 'class-validator'

async function bootstrap() {

  initializeTransactionalContext()

  const nest = await NestFactory
    .create(AppModule)

  nest.setGlobalPrefix('/api')

  nest.useGlobalPipes(
    new ValidationPipe({
      stopAtFirstError: true,
      forbidUnknownValues: false
    })
  )

  useContainer(
    nest.select(AppModule), {
      fallbackOnErrors: true
    }
  )

  const configuration = new DocumentBuilder()
    .setTitle('TRAS')
    .setDescription('Test Result Analysis System')
    .setVersion('1.0.0')
    .build()

  const document = SwaggerModule
    .createDocument(nest, configuration)

  SwaggerModule
    .setup('docs', nest, document)

  await nest.listen(3000, '0.0.0.0')
}

void bootstrap()
