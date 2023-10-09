import { Blockchain } from '@ankr.com/ankr.js'
import { IsString } from 'class-validator'

export class GetTokenBalanceDto {
  @IsString()
  wallet: string

  @IsString()
  blockchain: Blockchain
}


export class GetTokenPriceDto {
  @IsString()
  token_contract: string

  @IsString()
  blockchain: Blockchain
}