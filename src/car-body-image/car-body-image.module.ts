import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { CarBodyImageRepository } from './car-body-image.repository';
import { CarBodyImageService } from './car-body-image.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarBodyImageRepository]),
    ListingCarModule,
  ],
  providers: [CarBodyImageService],
  exports: [CarBodyImageService],
})
export class CarBodyImageModule {}
