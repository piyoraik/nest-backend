import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseManagementRepository } from './purchase-management.repository';
import { PurchaseManagementService } from './purchase-management.service';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseManagementRepository])],
  providers: [PurchaseManagementService],
  exports: [PurchaseManagementService],
})
export class PurchaseManagementModule {}
