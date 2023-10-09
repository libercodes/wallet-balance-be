import { Module } from '@nestjs/common'
import { UserWalletService } from './user-wallet.service'
import { UserWalletController } from './user-wallet.controller'
import { BlockchainProviderModule } from '../../blockchain-provider/blockchain-provider.module'

@Module({
  imports: [
    BlockchainProviderModule
  ],
  providers: [
    UserWalletService
  ],
  controllers: [
    UserWalletController
  ],
  exports: [
    UserWalletService
  ]
})
export class UserWalletModule { }