import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberRepository } from './car-body-number.repository';
import { CarBodyNumberService } from './car-body-number.service';

@Module({
  imports: [TypeOrmModule.forFeature([CarBodyNumberRepository])],
  providers: [CarBodyNumberService],
  exports: [CarBodyNumberService]
})
export class CarBodyNumberModule {}
