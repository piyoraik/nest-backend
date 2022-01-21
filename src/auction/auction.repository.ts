import { NotFoundException } from '@nestjs/common';
import { Auction } from 'src/entity/auction.entity';
import { Members } from 'src/entity/members.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';

@EntityRepository(Auction)
export class AuctionRepository extends Repository<Auction> {
  async createAuction(createAuctionDTO: CreateAuctionDto, member: Members) {
    const auction = this.create({
      member,
      ...createAuctionDTO,
    });
    await this.save(auction);
    return auction;
  }

  async findOneAuction(attrs: Partial<Auction>) {
    const auction = await this.findOne(attrs, { relations: ['member'] });
    if (!auction) {
      throw new NotFoundException('Auction Not Found');
    }
    return auction;
  }

  async findWhereLikeAuction(attrs: Partial<Auction>) {
    const parseAttrs: Partial<Auction> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const auctions = await this.find({
      where: parseAttrs,
      relations: ['member'],
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
