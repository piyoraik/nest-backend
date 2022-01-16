import { Module } from '@nestjs/common';
import { TestingRecordService } from './testing-record.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestingRecordRepository } from './testing-record.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestingRecordRepository])],
  providers: [TestingRecordService],
})
export class TestingRecordModule {}
