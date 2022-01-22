import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirBackModule } from 'src/air-back/air-back.module';
import { AirConditionerModule } from 'src/air-conditioner/air-conditioner.module';
import { CarModelModule } from 'src/car-model/car-model.module';
import { ColorModule } from 'src/color/color.module';
import { FuelModule } from 'src/fuel/fuel.module';
import { GearModule } from 'src/gear/gear.module';
import { HandleModule } from 'src/handle/handle.module';
import { ImportedCarModule } from 'src/imported-car/imported-car.module';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { MakerModule } from 'src/maker/maker.module';
import { ShapeModule } from 'src/shape/shape.module';
import { ShiftModule } from 'src/shift/shift.module';
import { CarBodyNumberRepository } from './car-body-number.repository';
import { CarBodyNumberService } from './car-body-number.service';
import { CarBodyNumberController } from './car-body-number.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([CarBodyNumberRepository]),
    ListingCarModule,
    AirBackModule,
    ShiftModule,
    FuelModule,
    ColorModule,
    ImportedCarModule,
    MakerModule,
    ShapeModule,
    HandleModule,
    CarModelModule,
    GearModule,
    AirConditionerModule,
  ],
  providers: [CarBodyNumberService],
  exports: [CarBodyNumberService],
  controllers: [CarBodyNumberController],
})
export class CarBodyNumberModule {}
