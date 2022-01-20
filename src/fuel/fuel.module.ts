import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FuelRepository } from './fuel.repository';
import { FuelService } from './fuel.service';

@Module({
  imports: [TypeOrmModule.forFeature([FuelRepository])],
  providers: [FuelService],
  exports: [FuelService]
})
export class FuelModule {}
