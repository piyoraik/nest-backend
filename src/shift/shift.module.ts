import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShiftRepository } from './shift.repository';
import { ShiftService } from './shift.service';

@Module({
  imports: [TypeOrmModule.forFeature([ShiftRepository])],
  providers: [ShiftService],
  exports: [ShiftService]
})
export class ShiftModule {}
