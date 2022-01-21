import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { TestingRecord } from 'src/entity/testing.record.entity';
import { CreateTestingRecordDTO } from './dto/create-testingrecord.dto';
import { TestingRecordRepository } from './testing-record.repository';

@Injectable()
// testingRecord.service.ts
export class TestingRecordService {
  constructor(private testingRecordRepository: TestingRecordRepository) {}

  // create
  async create(
    createTestingRecordDTO: CreateTestingRecordDTO,
    listingCar: ListingCar,
  ) {
    return await this.testingRecordRepository.createTestingRecord(
      createTestingRecordDTO,
      listingCar,
    );
  }

  // findAll
  async findAll() {
    return await this.testingRecordRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.testingRecordRepository.findOneTestingRecord({ id });
  }

  // findOne
  async findOne(attrs: Partial<TestingRecord>) {
    return await this.testingRecordRepository.findOneTestingRecord(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<TestingRecord>) {
    return await this.testingRecordRepository.findWhereTestingRecord(attrs);
  }

  // update
  async update(id: number, attrs: Partial<TestingRecord>) {
    return await this.testingRecordRepository.updateTestingRecord(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.testingRecordRepository.softDeleteTestingRecord(id);
  }
}
