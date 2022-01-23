import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersModule } from 'src/members/members.module';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';
import { AfterSuccessfulBidService } from './after-successful-bid.service';
import { AfterSuccessfulBidController } from './after-successful-bid.controller';
import { AuctionListingModule } from 'src/auction-listing/auction-listing.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AfterSuccessfulBidRepository]),
    MembersModule,
    AuctionListingModule,
  ],
  providers: [AfterSuccessfulBidService],
  exports: [AfterSuccessfulBidService],
  controllers: [AfterSuccessfulBidController],
})
export class AfterSuccessfulBidModule {}
