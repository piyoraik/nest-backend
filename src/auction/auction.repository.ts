import { NotFoundException } from '@nestjs/common';
import { Auction } from 'src/entity/auction.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';

@EntityRepository(Auction)
export class AuctionRepository extends Repository<Auction> {
  async createAuction(createAuctionDTO: CreateAuctionDto) {
    const auction = this.create({
      ...createAuctionDTO,
    });
    await this.save(auction);
    return auction;
  }

  async findOneAuction(attrs: Partial<Auction>) {
    const auction = await this.findOne(attrs);
    if (!auction) {
      throw new NotFoundException('Auction Not Found');
    }
    return auction;
  }

  async findWhereLikeAuction(attrs: Partial<Auction>) {
    for (const key in attrs) {
      attrs[key] = ILike('%' + attrs[key] + '%');
    }
    const auctions = await this.find({
      where: attrs,
    });
    if (!auctions) {
      throw new NotFoundException('Auction Not Found');
    }
    return auctions;
  }

  async updateAuction(id: number, attrs: Partial<Auction>) {
    const auction = await this.findOneAuction({ id });
    Object.assign(auction, attrs);
    await this.save(auction);
    return auction;
  }

  async softDeleteAuction(id: number) {
    const auction = await this.findOneAuction({ id });
    await this.softRemove(auction);
    return auction;
  }
}
