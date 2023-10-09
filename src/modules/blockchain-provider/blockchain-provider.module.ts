import { Module } from '@nestjs/common'
import { AnkrBlockchainProvider } from './ankr-blockchain-provider.service'

export const BLOCKCHAIN_PROVIDER = 'BLOCKCHAIN_PROVIDER'

const blockchainProviderService = {
  useClass: AnkrBlockchainProvider,
  provide: BLOCKCHAIN_PROVIDER
}

@Module({
  imports: [],
  providers: [
    blockchainProviderService
  ],
  exports: [
    blockchainProviderService
  ]
})
export class BlockchainProviderModule { }