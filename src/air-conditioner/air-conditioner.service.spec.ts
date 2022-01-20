import { Test, TestingModule } from '@nestjs/testing';
import { AirConditionerService } from './air-conditioner.service';

describe('AirConditionerService', () => {
  let service: AirConditionerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirConditionerService],
    }).compile();

    service = module.get<AirConditionerService>(AirConditionerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
