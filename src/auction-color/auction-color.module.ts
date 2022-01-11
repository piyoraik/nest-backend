import { Module } from '@nestjs/common';
import { AuctionColorService } from './auction-color.service';

@Module({
  providers: [AuctionColorService]
})
export class AuctionColorModule {}
