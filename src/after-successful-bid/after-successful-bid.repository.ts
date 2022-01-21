import { NotFoundException } from '@nestjs/common';
import { AfterSuccessfulBid } from 'src/entity/after.successful.bid.entity';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAfterSuccessfulBidDTO } from './dto/create.after-successful-bid.dto';

@EntityRepository(AfterSuccessfulBid)
export class AfterSuccessfulBidRepository extends Repository<AfterSuccessfulBid> {
  // Createの操作
  async createAfterSuccessfulBid(
    createAfterSuccessfulBidDTO: CreateAfterSuccessfulBidDTO,
    auctionListing: AuctionListing,
  ) {
    const afterSuccessfulBid = this.create({
      ...createAfterSuccessfulBidDTO,
      auctionListing,
    });
    await this.save(afterSuccessfulBid);
    return afterSuccessfulBid;
  }

  // findOne
  async findOneAfterSuccessfulBid(attrs: Partial<AfterSuccessfulBid>) {
    const afterSuccessfulBid = await this.findOne(attrs);
    if (!afterSuccessfulBid) {
      throw new NotFoundException('AfterSuccessfulBid Not Found');
    }
    return afterSuccessfulBid;
  }

  // findWhere
  async findWhereLikeAfterSuccessfulBid(attrs: Partial<AfterSuccessfulBid>) {
    const parseAttrs: Partial<AfterSuccessfulBid> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const afterSuccessfulBids = await this.find({
      where: parseAttrs,
      relations: ['deliveryMethod'],
    });
    if (!afterSuccessfulBids) {
      throw new NotFoundException('AfterSuccessfulBid Not Found');
    }
    return afterSuccessfulBids;
  }

  // update
  async updateAfterSuccessfulBid(
    id: number,
    attrs: Partial<AfterSuccessfulBid>,
  ) {
    const afterSuccessfulBid = await this.findOneAfterSuccessfulBid({ id });
    Object.assign(afterSuccessfulBid, attrs);
    await this.save(afterSuccessfulBid);
    return afterSuccessfulBid;
  }

  // softDelete
  async softDeleteAfterSuccessfulBid(id: number) {
    const afterSuccessfulBid = await this.findOneAfterSuccessfulBid({ id });
    await this.softRemove(afterSuccessfulBid);
    return afterSuccessfulBid;
  }
}
