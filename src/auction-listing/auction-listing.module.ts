import { Module } from '@nestjs/common';
import { AuctionListingController } from './auction-listing.controller';
import { AuctionListingService } from './auction-listing.service';

@Module({
  controllers: [AuctionListingController],
  providers: [AuctionListingService]
})
export class AuctionListingModule {}
