import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionListingModule } from 'src/auction-listing/auction-listing.module';
import { MembersModule } from 'src/members/members.module';
import { PurchaseRepository } from './purchase.repository';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PurchaseRepository]),
    AuctionListingModule,
    MembersModule,
  ],
  providers: [PurchaseService],
  exports: [PurchaseService],
})
export class PurchaseModule {}
