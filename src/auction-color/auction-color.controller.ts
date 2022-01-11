import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuctionColorService } from './auction-color.service';
import { CreateAuctionColorDTO } from './dto/create-auctioncolor-dto';

@Controller('auction-color')
export class AuctionColorController {
  constructor(private readonly auctionColorService: AuctionColorService) {}

  @Get()
  fetchAll() {
    return this.auctionColorService.fetchAll();
  }

  @Post()
  create(@Body() body: CreateAuctionColorDTO) {
    return this.auctionColorService.create(body);
  }
}
