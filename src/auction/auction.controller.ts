import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';

@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Get()
  fetchAll() {
    return this.auctionService.fetchAll();
  }

  @Post()
  create(@Body() body: CreateAuctionDto) {
    return this.auctionService.create(body);
  }
}
