import { Module } from '@nestjs/common';
import { TestingRecordService } from './testing-record.service';
import { TestingRecordController } from './testing-record.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TestingRecordRepository } from './testing-record.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TestingRecordRepository])],
  providers: [TestingRecordService],
  controllers: [TestingRecordController],
})
export class TestingRecordModule {}
