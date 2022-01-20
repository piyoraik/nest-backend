import { Injectable } from '@nestjs/common';
import { PurchaseManagementRepository } from './purchase-management.repository';

@Injectable()
export class PurchaseManagementService {
    constructor(
        private purchaseManagementRepository: PurchaseManagementRepository,
      ) {}
}
