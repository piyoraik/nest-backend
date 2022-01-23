import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreatePriceDTO } from './dto/create.price.dto';
import { PriceService } from './price.service';

@ApiTags('落札後に叩くやつ（料金）')
@Controller('price')
export class PriceController {
  constructor(private readonly priceService: PriceService) {}

  @Get(':auctionListingId')
  get(@Param('auctionListingId') id: string) {
    return this.priceService.findOneId(+id);
  }

  @Post(':auctionListingId')
  create(@Param('auctionListingId') id: string, @Body() body: CreatePriceDTO) {
    return this.priceService.create(body, +id);
  }
}
