import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirConditionerRepository } from './air-conditioner.repository';
import { AirConditionerService } from './air-conditioner.service';

@Module({
  imports: [TypeOrmModule.forFeature([AirConditionerRepository])],
  providers: [AirConditionerService],
  exports: [AirConditionerService],
})
export class AirConditionerModule {}
