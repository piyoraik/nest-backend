import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { FuelRepository } from './fuel.repository';
import { FuelService } from './fuel.service';
import { FuelController } from './fuel.controller';

@Module({
  imports: [TypeOrmModule.forFeature([FuelRepository])],
  providers: [FuelService],
  exports: [FuelService],
  controllers: [FuelController],
})
export class FuelModule {}
