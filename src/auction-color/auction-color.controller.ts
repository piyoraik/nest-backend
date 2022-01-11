import { Controller, Get } from '@nestjs/common';
import { AuctionColorService } from './auction-color.service';

@Controller('auction-color')
export class AuctionColorController {
  constructor(private readonly auctionColorService: AuctionColorService) {}

  @Get()
  fetchAll() {
    return this.auctionColorService.fetchAll();
  }
}
