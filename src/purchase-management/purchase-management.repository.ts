import { PurchaseManagement } from "src/entity/purchase.management.entity";
import { EntityRepository, Repository } from "typeorm";
import { CreatePurchaseManagementDTO } from "./dto/create.purchase-management.dto";

@EntityRepository(PurchaseManagement)
export class PurchaseManagementRepository extends Repository<PurchaseManagement> { 
    // Createの操作
  async createPurchaseManagement(createPurchaseManagementDTO: CreatePurchaseManagementDTO) {
    const purchaseManagement = this.create({
      ...createPurchaseManagementDTO,
    });
    await this.save(purchaseManagement);
    return purchaseManagement;
  }

  // findOne
  async findOneHoge(attrs: Partial<Hoge>) {
    const hoge = await this.findOne(attrs)
    if (!hoge) {
      throw new NotFoundException('Hoge Not Found')
    }
    return hoge
  }

  // findWhere
  async findWhereLikeHoge(attrs: Partial<Hoge>) {
    const parseAttrs: Partial<Hoge> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const hoges = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!hoges) {
      throw new NotFoundException('Hoge Not Found');
    }
    return hoges;
  }
  }

  // update
  async updateHoge(id: number, attrs: Partial<Hoge>) {
    const hoge = await this.findOneHoge({ id })
    Object.assign(hoge, attrs)
    await this.save(hoge)
    return hoge
  }

  // softDelete
  async softDeleteHoge(id: number) {
    const hoge = await this.findOneHoge({ id })
    await this.softRemove(hoge)
    return hoge
  }
}