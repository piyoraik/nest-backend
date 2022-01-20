import { Test, TestingModule } from '@nestjs/testing';
import { AfterSuccessfulBidService } from './after-successful-bid.service';

describe('AfterSuccessfulBidService', () => {
  let service: AfterSuccessfulBidService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AfterSuccessfulBidService],
    }).compile();

    service = module.get<AfterSuccessfulBidService>(AfterSuccessfulBidService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
