import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseRepository } from './purchase.repository';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [TypeOrmModule.forFeature([PurchaseRepository])],
  providers: [PurchaseService],
  exports: [PurchaseService]
})
export class PurchaseModule {}
