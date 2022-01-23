import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { CarBodyNumberRepository } from './car-body-number.repository';
import { CarBodyNumberService } from './car-body-number.service';
import { CarBodyNumberController } from './car-body-number.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarBodyNumberRepository]),
    ListingCarModule,
  ],
  providers: [CarBodyNumberService],
  exports: [CarBodyNumberService],
  controllers: [CarBodyNumberController],
})
export class CarBodyNumberModule {}
