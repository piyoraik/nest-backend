import { Injectable } from '@nestjs/common';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { Members } from 'src/entity/member.entity';
import { Purchase } from 'src/entity/purchase.entity';
import { CreatePurchaseDTO } from './dto/create.purchase.dto';
import { PurchaseRepository } from './purchase.repository';

@Injectable()
export class PurchaseService {
  constructor(private readonly purchaseRepository: PurchaseRepository) {}

  async create(
    createPurchaseDTO: CreatePurchaseDTO,
    auctionListing: AuctionListing,
    member: Members,
  ) {
    return await this.purchaseRepository.createPurchase(
      member,
      auctionListing,
      createPurchaseDTO,
    );
  }

  async findOneId(id: number) {
    return await this.purchaseRepository.findOnePurchase({ id });
  }

  async findOne(attrs: Partial<Purchase>) {
    return await this.purchaseRepository.findOnePurchase(attrs);
  }

  async findWhere(attrs: Partial<Purchase>) {
    return await this.purchaseRepository.findWherePurchase(attrs);
  }

  async update(id: number, attrs: Partial<Purchase>) {
    return await this.purchaseRepository.updatePurchase(id, attrs);
  }

  async softDelete(id: number) {
    return await this.purchaseRepository.softDeletePurchase(id);
  }
}
