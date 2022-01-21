import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarBodyNumberModule } from 'src/car-body-number/car-body-number.module';
import { GearRepository } from './gear.repository';
import { GearService } from './gear.service';

@Module({
  imports: [TypeOrmModule.forFeature([GearRepository])],
  providers: [GearService],
  exports: [GearService],
})
export class GearModule {}
