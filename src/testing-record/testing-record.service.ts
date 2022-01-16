import { Injectable } from '@nestjs/common';
import { TestingRecordRepository } from './testing-record.repository';

@Injectable()
export class TestingRecordService {
  constructor(
    private readonly testingRecordRepository: TestingRecordRepository,
  ) {}
}
