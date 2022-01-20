import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';
import { AfterSuccessfulBidService } from './after-successful-bid.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([AfterSuccessfulBidRepository]),
    deliveryMethodModule,
    auctionListingModule,
  ],
  providers: [AfterSuccessfulBidService],
  exports: [AfterSuccessfulBidService],
})
export class AfterSuccessfulBidModule {}
