import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import * as dotenv from 'dotenv'
import { RequestLoggerMiddleware } from './middlewares/request-logger.middleware'
import { UserWalletModule } from './modules/wallet/user/user-wallet.module'

dotenv.config()

@Module({
  imports: [
    UserWalletModule
  ],
  controllers: [],
  providers: [],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(RequestLoggerMiddleware)
      .forRoutes('*')
  }
}
