import { Injectable } from '@nestjs/common';
import { CreatePurchaseManagementDTO } from './dto/create.purchase-management.dto';
import { PurchaseManagementRepository } from './purchase-management.repository';

@Injectable()
export class PurchaseManagementService {
  constructor(
    private purchaseManagementRepository: PurchaseManagementRepository,
  ) {}
  // create
  async create(createPurchaseManagementDTO: CreatePurchaseManagementDTO) {
    return this.purchaseManagementRepository.createPurchaseManagement(
      createPurchaseManagementDTO,
    );
  }
}
