import { Test, TestingModule } from '@nestjs/testing';
import { CarBodyNumberService } from './car-body-number.service';

describe('CarBodyNumberService', () => {
  let service: CarBodyNumberService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarBodyNumberService],
    }).compile();

    service = module.get<CarBodyNumberService>(CarBodyNumberService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
