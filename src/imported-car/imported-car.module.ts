import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { ImportedCarRepository } from './imported-car.repository';
import { ImportedCarService } from './imported-car.service';

@Module({
  imports: [TypeOrmModule.forFeature([ImportedCarRepository])],
  providers: [ImportedCarService],
  exports: [ImportedCarService],
})
export class ImportedCarModule {}
