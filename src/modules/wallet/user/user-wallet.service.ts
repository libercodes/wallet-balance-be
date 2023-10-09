import { Inject, Injectable } from '@nestjs/common'
import { GetTokenBalanceRes, IBlockchainProvider } from '../../blockchain-provider/blockchain-provider.interface'
import { BLOCKCHAIN_PROVIDER } from '../../blockchain-provider/blockchain-provider.module'
import { GetTokenBalanceDto, GetTokenPriceDto } from './user-wallet.dto'
import { Blockchain, CurrencyDetailsExtended } from '@ankr.com/ankr.js'

@Injectable()
export class UserWalletService {
  constructor(
    @Inject(BLOCKCHAIN_PROVIDER)
    private readonly blockchainProvider: IBlockchainProvider
  ) { }

  public async getTokenBalance(dto: GetTokenBalanceDto): Promise<GetTokenBalanceRes> {
    const { wallet, blockchain } = dto
    return this.blockchainProvider.getTokensBalance(wallet, blockchain)
  }

  public async getTokenPrice(dto: GetTokenPriceDto): Promise<string> {
    const { token_contract, blockchain } = dto
    return this.blockchainProvider.getTokenPrice(token_contract, blockchain)
  }


  public async getCurrencies(blockchain: Blockchain): Promise<CurrencyDetailsExtended[]> {
    return this.blockchainProvider.getCurrencies(blockchain)
  }
}