import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionListingModule } from 'src/auction-listing/auction-listing.module';
import { PurchaseManagementRepository } from './purchase-management.repository';
import { PurchaseManagementService } from './purchase-management.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([PurchaseManagementRepository]),
    AuctionListingModule,
  ],
  providers: [PurchaseManagementService],
  exports: [PurchaseManagementService],
})
export class PurchaseManagementModule {}
