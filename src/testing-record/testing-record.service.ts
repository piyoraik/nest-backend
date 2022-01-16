import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CreateTestingRecordDTO } from './dto/create-testingrecord.dto';
import { TestingRecordRepository } from './testing-record.repository';

@Injectable()
export class TestingRecordService {
  constructor(
    private readonly testingRecordRepository: TestingRecordRepository,
  ) {}
  async findAll() {
    return await this.testingRecordRepository.find();
  }

  async create(
    createTestingRecordDTO: CreateTestingRecordDTO,
    listingCar: ListingCar,
  ) {
    return this.testingRecordRepository.createTestingRecord(
      createTestingRecordDTO,
      listingCar,
    );
  }

  async findOne(id: number) {
    return await this.testingRecordRepository.findOneTestingRecord({ id });
  }

  async find(attrs: Partial<ListingCar>) {
    return await this.testingRecordRepository.findWhereTestingRecord(attrs);
  }

  async update(id: number, attrs: Partial<ListingCar>) {
    return await this.testingRecordRepository.updateTestingRecord(id, attrs);
  }

  async delete(id: number) {
    return await this.testingRecordRepository.softDeleteTestingRecord(id);
  }
}
