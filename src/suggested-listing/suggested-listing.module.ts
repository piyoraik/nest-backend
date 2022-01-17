import { Module } from '@nestjs/common';
import { SuggestedListingService } from './suggested-listing.service';

@Module({
  providers: [SuggestedListingService]
})
export class SuggestedListingModule {}
