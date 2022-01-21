import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionListingModule } from 'src/auction-listing/auction-listing.module';
import { PurchaseManagementRepository } from './purchase-management.repository';
import { PurchaseManagementService } from './purchase-management.service';
import { PurchaseManagementController } from './purchase-management.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([PurchaseManagementRepository]),
    AuctionListingModule,
  ],
  providers: [PurchaseManagementService],
  exports: [PurchaseManagementService],
  controllers: [PurchaseManagementController],
})
export class PurchaseManagementModule {}
