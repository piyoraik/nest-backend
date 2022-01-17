import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuggestedListingRepository } from './suggested-listing.repository';
import { SuggestedListingService } from './suggested-listing.service';

@Module({
  imports: [TypeOrmModule.forFeature([SuggestedListingRepository])],
  providers: [SuggestedListingService],
})
export class SuggestedListingModule {}
