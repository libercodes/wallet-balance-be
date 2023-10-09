import { Injectable } from '@nestjs/common'
import {
  GetTokenBalanceRes,
  IBlockchainProvider,
  TokenBalance
} from './blockchain-provider.interface'
import {
  AnkrProvider,
  Balance as AnkrBalance,
  Blockchain,
  CurrencyDetailsExtended
} from '@ankr.com/ankr.js'

import * as dotenv from 'dotenv'
dotenv.config()

const { ANKR_ENDPOINT } = process.env
@Injectable()
export class AnkrBlockchainProvider implements IBlockchainProvider {
  private readonly provider: AnkrProvider

  constructor() {
    this.provider = new AnkrProvider(ANKR_ENDPOINT)
  }

  public async getTokenPrice(tokenContract: string, blockchain: Blockchain): Promise<string> {
    const res = await this.provider.getTokenPrice({
      blockchain,
      contractAddress: tokenContract
    })

    return res.usdPrice
  }

  public async getCurrencies(blockchain: Blockchain): Promise<CurrencyDetailsExtended[]> {
    const res = await this.provider.getCurrencies({
      blockchain,
    })

    return res.currencies
  }

  public async getTokensBalance(wallet: string, blockchain?: Blockchain): Promise<GetTokenBalanceRes> {
    let assets: AnkrBalance[] = []
    let pageToken: string | undefined = undefined
    let totalBalanceUsd: string = ''

    do {
      const res = await this.provider.getAccountBalance({
        walletAddress: wallet,
        pageToken,
        blockchain
      })

      console.log((JSON.stringify(res.assets, null, 2)))

      assets = assets.concat(res.assets)
      totalBalanceUsd = res.totalBalanceUsd

      pageToken = res ? res.nextPageToken : undefined
    } while (pageToken)

    const tokens = this.formatTokenBalance(assets)

    return {
      tokens,
      totalBalanceUsd
    }
  }

  private formatTokenBalance(dto: AnkrBalance[]): TokenBalance[] {
    const tokens = dto.map<TokenBalance>(x => ({
      balance: x.balance,
      balanceRawInteger: x.balanceRawInteger,
      balanceUsd: x.balanceUsd,
      contractAddress: x.contractAddress,
      token: {
        name: x.tokenName,
        decimals: x.tokenDecimals,
        thumbnail: x.thumbnail,
        price: x.tokenPrice,
        symbol: x.tokenSymbol,
        type: x.tokenType
      }
    }))

    return tokens
  }
}