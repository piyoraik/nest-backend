import { TestingRecord } from 'src/entity/testing.record.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(TestingRecord)
export class TestingRecordRepository extends Repository<TestingRecord> {}
