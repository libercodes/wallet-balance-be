/* eslint-disable @typescript-eslint/no-unused-vars */
import { Blockchain } from '@ankr.com/ankr.js'
import { GetTokenBalanceRes, IBlockchainProvider } from './blockchain-provider.interface'

export class AnkrBlockchainProviderTestImpl implements IBlockchainProvider {
  async getTokenPrice(token: string, blockchain: Blockchain) {
    return '1'
  }

  async getCurrencies(blockchain: Blockchain) {
    return []
  }

  async getTokensBalance(wallet: string, blockchain?: Blockchain): Promise<GetTokenBalanceRes> {
    return {
      totalBalanceUsd: '0',
      tokens: []
    }
  }
}