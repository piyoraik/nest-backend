import { NotFoundException } from '@nestjs/common';
import { Auction } from 'src/entity/auction.entity';
import { Members } from 'src/entity/member.entity';
import { EntityRepository, Repository } from 'typeorm';
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

  async findWhereAuction(attrs: Partial<Auction>) {
    const auctions = await this.find(attrs);
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
