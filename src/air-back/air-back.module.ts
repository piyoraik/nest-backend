import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AirBackRepository } from './air-back.repository';
import { AirBackService } from './air-back.service';

@Module({
  imports: [TypeOrmModule.forFeature([AirBackRepository])],
  providers: [AirBackService],
  exports: [AirBackService]
})
export class AirBackModule {}
