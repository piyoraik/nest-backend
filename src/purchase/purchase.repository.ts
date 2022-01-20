import { Purchase } from "src/entity/purchase.entity";
import { EntityRepository, Repository } from "typeorm";
import { NotFoundException } from '@nestjs/common';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { Members } from 'src/entity/member.entity';
import { Purchase } from 'src/entity/purchase.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePurchaseDTO } from './dto/create.purchase.dto';

@EntityRepository(Purchase)
export class PurchaseRepository extends Repository<Purchase> {
  async createPurchase(
    member: Members,
    auctionListing: AuctionListing,
    createPurchaseDTO: CreatePurchaseDTO,
  ) {
    const purchase = this.create({
      auctionListing,
      member,
      ...createPurchaseDTO,
    });
    await this.save(purchase);
    return purchase;
  }

  async findOnePurchase(attrs: Partial<Purchase>) {
    const purchase = await this.findOne({
      where: attrs,
      relations: ['auctionListing'],
    });
    if (!purchase) {
      throw new NotFoundException('Purchase Not Found');
    }
    return purchase;
  }

  async findWherePurchase(attrs: Partial<Purchase>) {
    const purchases = await this.find({
      where: attrs,
      relations: ['auctionListing'],
    });
    if (!purchases) {
      throw new NotFoundException('Purchase Not Found');
    }
    return purchases;
  }

  async updatePurchase(id: number, attrs: Partial<Purchase>) {
    const purchase = await this.findOnePurchase({ id });
    Object.assign(purchase, attrs);
    await this.save(purchase);
    return purchase;
  }

  async softDeletePurchase(id: number) {
    const purchase = await this.findOnePurchase({ id });
    await this.softRemove(purchase);
    return purchase;
  }
}