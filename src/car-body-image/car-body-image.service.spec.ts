import { Test, TestingModule } from '@nestjs/testing';
import { CarBodyImageService } from './car-body-image.service';

describe('CarBodyImageService', () => {
  let service: CarBodyImageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CarBodyImageService],
    }).compile();

    service = module.get<CarBodyImageService>(CarBodyImageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
