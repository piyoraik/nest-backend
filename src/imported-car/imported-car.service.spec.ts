import { Test, TestingModule } from '@nestjs/testing';
import { ImportedCarService } from './imported-car.service';

describe('ImportedCarService', () => {
  let service: ImportedCarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImportedCarService],
    }).compile();

    service = module.get<ImportedCarService>(ImportedCarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
