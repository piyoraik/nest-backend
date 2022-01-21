import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdditionModule } from 'src/addition/addition.module';
import { CarBodyEvaluationModule } from 'src/car-body-evaluation/car-body-evaluation.module';
import { CarBodyImageModule } from 'src/car-body-image/car-body-image.module';
import { InspectionModule } from 'src/inspection/inspection.module';
import { SalesPointModule } from 'src/sales-point/sales-point.module';
import { TestingRecordModule } from 'src/testing-record/testing-record.module';
import { ListingCarController } from './listing-car.controller';
import { ListingCarRepository } from './listing-car.repository';
import { ListingCarService } from './listing-car.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ListingCarRepository]),
    SalesPointModule,
    CarBodyImageModule,
    AdditionModule,
    CarBodyEvaluationModule,
    InspectionModule,
    TestingRecordModule,
  ],
  controllers: [ListingCarController],
  providers: [ListingCarService],
})
export class ListingCarModule {}
