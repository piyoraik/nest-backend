import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ListingCarModule } from 'src/listing-car/listing-car.module';
import { AdditionRepository } from './addition.repository';
import { AdditionService } from './addition.service';

@Module({
  imports: [TypeOrmModule.forFeature([AdditionRepository])],
  providers: [AdditionService],
  exports: [AdditionService],
})
export class AdditionModule {}
