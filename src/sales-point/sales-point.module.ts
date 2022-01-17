import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesPointRepository } from './sales-point.repository';
import { SalesPointService } from './sales-point.service';

@Module({
  imports: [TypeOrmModule.forFeature([SalesPointRepository])],
  providers: [SalesPointService],
})
export class SalesPointModule {}
