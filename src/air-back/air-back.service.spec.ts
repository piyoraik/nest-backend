import { Test, TestingModule } from '@nestjs/testing';
import { AirBackService } from './air-back.service';

describe('AirBackService', () => {
  let service: AirBackService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirBackService],
    }).compile();

    service = module.get<AirBackService>(AirBackService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
