import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { ShiftRepository } from './shift.repository';
import { ShiftService } from './shift.service';
import { ShiftController } from './shift.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ShiftRepository])],
  providers: [ShiftService],
  exports: [ShiftService],
  controllers: [ShiftController],
})
export class ShiftModule {}
