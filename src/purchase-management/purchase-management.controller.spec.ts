import { Test, TestingModule } from '@nestjs/testing';
import { PurchaseManagementController } from './purchase-management.controller';

describe('PurchaseManagementController', () => {
  let controller: PurchaseManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PurchaseManagementController],
    }).compile();

    controller = module.get<PurchaseManagementController>(PurchaseManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
