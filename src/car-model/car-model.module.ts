import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarModelRepository } from './car-model.repository';
import { CarModelService } from './car-model.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarModelRepository])],
  providers: [CarModelService],
  exports: [CarModelService]
})
export class CarModelModule {}
