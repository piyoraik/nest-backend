import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { CarModelRepository } from './car-model.repository';
import { CarModelService } from './car-model.service';
import { CarModelController } from './car-model.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CarModelRepository])],
  providers: [CarModelService],
  exports: [CarModelService],
  controllers: [CarModelController],
})
export class CarModelModule {}
