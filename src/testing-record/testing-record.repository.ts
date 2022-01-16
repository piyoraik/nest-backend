import { NotFoundException } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { TestingRecord } from 'src/entity/testing.record.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateTestingRecordDTO } from './dto/create-testingrecord.dto';

@EntityRepository(TestingRecord)
export class TestingRecordRepository extends Repository<TestingRecord> {
  async createTestingRecord(
    createTestingRecordDTO: CreateTestingRecordDTO,
    listingCar: ListingCar,
  ) {
    const createTesting = this.create({
      listingCar,
      ...createTestingRecordDTO,
    });
    await this.save(createTesting);
    return createTesting;
  }

  async findOneTestingRecord(attrs: Partial<TestingRecord>) {
    const testingRecord = await this.findOne(attrs);
    if (!testingRecord) {
      throw new NotFoundException('TestingRecord Not Found');
    }
    return testingRecord;
  }

  async findWhereTestingRecord(attrs: Partial<TestingRecord>) {
    const testingRecords = await this.find(attrs);
    if (!testingRecords) {
      throw new NotFoundException('TestingRecord Not Found');
    }
    return testingRecords;
  }

  async updateTestingRecord(id: number, attrs: Partial<TestingRecord>) {
    const testingRecord = await this.findOneTestingRecord(attrs);
    Object.assign(testingRecord, attrs);
    await this.save(testingRecord);
    return testingRecord;
  }

  async softDeleteTestingRecord(id: number) {
    const testingRecord = await this.findOneTestingRecord({ id });
    await this.softRemove(testingRecord);
    return testingRecord;
  }
}
