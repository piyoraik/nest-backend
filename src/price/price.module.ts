import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionListingModule } from 'src/auction-listing/auction-listing.module';
import { PriceRepository } from './price.repository';
import { PriceService } from './price.service';
import { PriceController } from './price.controller';
import { MembersModule } from 'src/members/members.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PriceRepository]),
    AuctionListingModule,
    MembersModule,
  ],
  providers: [PriceService],
  exports: [PriceService],
  controllers: [PriceController],
})
export class PriceModule {}
