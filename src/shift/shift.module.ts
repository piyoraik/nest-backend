import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { ShiftRepository } from './shift.repository';
import { ShiftService } from './shift.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShiftRepository])],
  providers: [ShiftService],
  exports: [ShiftService],
})
export class ShiftModule {}
