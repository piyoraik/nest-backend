import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { SuggestedListingRepository } from './suggested-listing.repository';
import { SuggestedListingService } from './suggested-listing.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([SuggestedListingRepository]),
    ListingCarModule,
  ],
  providers: [SuggestedListingService],
})
export class SuggestedListingModule {}
