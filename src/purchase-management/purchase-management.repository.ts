import { NotFoundException } from '@nestjs/common';
import { PurchaseManagement } from 'src/entity/purchase.management.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreatePurchaseManagementDTO } from './dto/create.purchase-management.dto';

@EntityRepository(PurchaseManagement)
export class PurchaseManagementRepository extends Repository<PurchaseManagement> {
  // Createの操作
  async createPurchaseManagement(
    createPurchaseManagementDTO: CreatePurchaseManagementDTO,
  ) {
    const purchaseManagement = this.create({
      ...createPurchaseManagementDTO,
    });
    await this.save(purchaseManagement);
    return purchaseManagement;
  }

  // findOne
  async findOnePurchaseManagement(attrs: Partial<PurchaseManagement>) {
    const purchaseManagement = await this.findOne(attrs);
    if (!purchaseManagement) {
      throw new NotFoundException('PurchaseManagement Not Found');
    }
    return purchaseManagement;
  }

  // findWhere
  async findWhereLikePurchaseManagement(attrs: Partial<PurchaseManagement>) {
    const parseAttrs: Partial<PurchaseManagement> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const purchaseManagements = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!purchaseManagements) {
      throw new NotFoundException('PurchaseManagement Not Found');
    }
    return purchaseManagements;
  }

  // update
  async updatePurchaseManagement(
    id: number,
    attrs: Partial<PurchaseManagement>,
  ) {
    const purchaseManagement = await this.findOnePurchaseManagement({ id });
    Object.assign(purchaseManagement, attrs);
    await this.save(purchaseManagement);
    return purchaseManagement;
  }

  // softDelete
  async softDeletePurchaseManagement(id: number) {
    const purchaseManagement = await this.findOnePurchaseManagement({ id });
    await this.softRemove(purchaseManagement);
    return purchaseManagement;
  }
}
