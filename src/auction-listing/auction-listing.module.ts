import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionListingController } from './auction-listing.controller';
import { AuctionListingRepository } from './auction-listing.repository';
import { AuctionListingService } from './auction-listing.service';

@Module({
  imports: [TypeOrmModule.forFeature([AuctionListingRepository])],
  controllers: [AuctionListingController],
  providers: [AuctionListingService],
})
export class AuctionListingModule {}
