import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { SalesPointRepository } from './sales-point.repository';
import { SalesPointService } from './sales-point.service';

@Module({
  imports: [TypeOrmModule.forFeature([SalesPointRepository]), ListingCarModule],
  providers: [SalesPointService],
  exports: [SalesPointService],
})
export class SalesPointModule {}
