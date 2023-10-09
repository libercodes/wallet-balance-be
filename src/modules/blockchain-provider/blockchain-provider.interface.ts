import { Blockchain, CurrencyDetailsExtended } from '@ankr.com/ankr.js'

export interface GetTokenBalanceRes {
  tokens: TokenBalance[]
  totalBalanceUsd: string
}

interface Token {
  name: string
  decimals: number
  thumbnail: string
  price: string
  symbol: string
  type: string
}

export interface TokenBalance {
  contractAddress: string
  balance: string
  balanceUsd: string
  balanceRawInteger: string
  token: Token
}
export interface IBlockchainProvider {
  getTokenPrice: (token: string, blockchain: Blockchain) => Promise<string>
  getTokensBalance: (wallet: string, blockchain?: Blockchain) => Promise<GetTokenBalanceRes>
  getCurrencies: (blockchain: Blockchain) => Promise<CurrencyDetailsExtended[]>
}