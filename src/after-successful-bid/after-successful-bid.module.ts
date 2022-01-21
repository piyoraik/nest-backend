import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionListingModule } from 'src/auction-listing/auction-listing.module';
import { MembersModule } from 'src/members/members.module';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';
import { AfterSuccessfulBidService } from './after-successful-bid.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AfterSuccessfulBidRepository]),
    MembersModule,
  ],
  providers: [AfterSuccessfulBidService],
  exports: [AfterSuccessfulBidService],
})
export class AfterSuccessfulBidModule {}
