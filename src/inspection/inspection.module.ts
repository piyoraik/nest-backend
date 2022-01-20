import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InspectionRepository } from './inspection.repository';
import { InspectionService } from './inspection.service';

@Module({
  imports: [TypeOrmModule.forFeature([InspectionRepository])],
  providers: [InspectionService],
  exports: [InspectionService],
})
export class InspectionModule {}
