import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { InspectionRepository } from './inspection.repository';
import { InspectionService } from './inspection.service';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionRepository]), ListingCarModule],
  providers: [InspectionService],
  exports: [InspectionService],
})
export class InspectionModule {}
