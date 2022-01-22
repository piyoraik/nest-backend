import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { AirBackRepository } from './air-back.repository';
import { AirBackService } from './air-back.service';
import { AirBackController } from './air-back.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AirBackRepository])],
  providers: [AirBackService],
  exports: [AirBackService],
  controllers: [AirBackController],
})
export class AirBackModule {}
