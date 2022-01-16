import { Module } from '@nestjs/common';
import { TestingRecordService } from './testing-record.service';
import { TestingRecordController } from './testing-record.controller';

@Module({
  providers: [TestingRecordService],
  controllers: [TestingRecordController]
})
export class TestingRecordModule {}
