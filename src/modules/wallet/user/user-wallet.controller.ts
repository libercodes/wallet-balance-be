import {
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
  Query,
  UseInterceptors
} from '@nestjs/common'
import { ResponseInterceptor } from '../../../helpers/response.interceptor'
import { ApiTags } from '@nestjs/swagger'
import { UserWalletService } from './user-wallet.service'
import { GetTokenBalanceDto, GetTokenPriceDto } from './user-wallet.dto'
import { GetTokenBalanceRes } from '../../blockchain-provider/blockchain-provider.interface'
import { Blockchain, CurrencyDetailsExtended } from '@ankr.com/ankr.js'

@Controller('user/wallet')
@UseInterceptors(ResponseInterceptor, ClassSerializerInterceptor)
@ApiTags('user/wallet')
export class UserWalletController {
  constructor(
    private readonly service: UserWalletService,
  ) { }

  @Get('/tokens')
  public async getAll(@Query() dto: GetTokenBalanceDto): Promise<GetTokenBalanceRes> {
    return this.service.getTokenBalance(dto)
  }

  @Get('/token/price')
  public async getPrice(@Query() dto: GetTokenPriceDto): Promise<string> {
    return this.service.getTokenPrice(dto)
  }

  @Get('/currencies/:blockchain')
  public async getCurrencies(@Param('blockchain') blockchain: Blockchain): Promise<CurrencyDetailsExtended[]> {
    return this.service.getCurrencies(blockchain)
  }
}
