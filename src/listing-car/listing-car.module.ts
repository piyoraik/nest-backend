import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyImageModule } from 'src/car-body-image/car-body-image.module';
import { SalesPointModule } from 'src/sales-point/sales-point.module';
import { ListingCarController } from './listing-car.controller';
import { ListingCarRepository } from './listing-car.repository';
import { ListingCarService } from './listing-car.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ListingCarRepository]),
    SalesPointModule,
    CarBodyImageModule,
  ],
  controllers: [ListingCarController],
  providers: [ListingCarService],
})
export class ListingCarModule {}
