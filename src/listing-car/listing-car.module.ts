import { Module } from '@nestjs/common';
import { ListingCarController } from './listing-car.controller';
import { ListingCarService } from './listing-car.service';

@Module({
  controllers: [ListingCarController],
  providers: [ListingCarService]
})
export class ListingCarModule {}
