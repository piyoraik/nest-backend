import { Module } from '@nestjs/common';
import { TestingRecordService } from './testing-record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestingRecordRepository } from './testing-record.repository';
import { ListingCarModule } from 'src/listing-car/listing-car.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([TestingRecordRepository]),
    ListingCarModule,
  ],
  providers: [TestingRecordService],
  exports: [TestingRecordService],
})
export class TestingRecordModule {}
