import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarController } from './listing-car.controller';
import { ListingCarRepository } from './listing-car.repository';
import { ListingCarService } from './listing-car.service';

@Module({
  imports: [TypeOrmModule.forFeature([ListingCarRepository])],
  controllers: [ListingCarController],
  providers: [ListingCarService],
})
export class ListingCarModule {}
