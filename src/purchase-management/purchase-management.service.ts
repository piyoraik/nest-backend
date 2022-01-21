import { Injectable } from '@nestjs/common';
import { PurchaseManagement } from 'src/entity/purchase.management.entity';
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

  // findOneID
  async findOneID(id: number) {
    return await this.purchaseManagementRepository.findOnePurchaseManagement({
      id: +id,
    });
  }

  // findOne
  async findOne(attrs: Partial<PurchaseManagement>) {
    return await this.purchaseManagementRepository.findOnePurchaseManagement(
      attrs,
    );
  }

  // findWhere
  async findWhere(attrs: Partial<PurchaseManagement>) {
    return await this.purchaseManagementRepository.findWhereLikePurchaseManagement(
      attrs,
    );
  }

  // update
  async update(id: number, attrs: Partial<PurchaseManagement>) {
    return await this.purchaseManagementRepository.updatePurchaseManagement(
      id,
      attrs,
    );
  }

  // softDelete
  async softDelete(id: number) {
    return await this.purchaseManagementRepository.softDeletePurchaseManagement(
      id,
    );
  }
}
