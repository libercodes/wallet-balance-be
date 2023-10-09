import * as dotenv from 'dotenv'

dotenv.config()

const { COMPRESSION_ENABLED, ENV, PORT } = process.env
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const isProd = ENV === 'PROD'

import { ValidationPipe } from '@nestjs/common'
import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { LogUnhandledErrorFilter } from './filters/log.filter'
import { checkEnvironmentVars } from './helpers/env.helper'
import * as compression from 'compression'
import helmet from 'helmet'
import { helmetOptions } from './config/helmet'
import { HttpExceptionFilter } from './filters/http.filter'
import { TrimPipe } from './helpers/pipes/trim.pipe'
import { logger } from './config/logger'


async function bootstrap(): Promise<any> {
  checkEnvironmentVars()
  const app = await NestFactory.create(AppModule, {
    logger
  })

  app.use(helmet(helmetOptions))
  app.enableCors()
  if (COMPRESSION_ENABLED === 'true') app.use(compression())
  app.useGlobalPipes(
    new ValidationPipe({ transform: true }),
    new TrimPipe()
  )
  app.useGlobalFilters(new LogUnhandledErrorFilter())
  app.useGlobalFilters(new HttpExceptionFilter())

  await app.listen(PORT)
}

bootstrap()
