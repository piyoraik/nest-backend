import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseManagementService } from './purchase-management.service';

describe('PurchaseManagementService', () => {
  let service: PurchaseManagementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PurchaseManagementService],
    }).compile();

    service = module.get<PurchaseManagementService>(PurchaseManagementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
