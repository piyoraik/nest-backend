import { NotFoundException } from '@nestjs/common';
import { Auction } from 'src/entity/auction.entity';
import { Members } from 'src/entity/member.entity';
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

  async findWhereAuction(attrs: Partial<Auction>) {
    // const auctions = await this.find({...attrs, relations: ["member"]});
    console.log(attrs);
    // const auctions = await this.find({ where: attrs ,relations: ["member"]});
    const auctions = await this.find({ where: attrs, relations: ['member'] });
    // console.log("今ここです");
    console.log(auctions);
    return auctions;
  }

  async findWhereLikeAuction(attrs: Partial<Auction>) {
    // const likeAuctionName = ILike("%" + attrs.auctionName + "%");
    const auctions = await this.find({
      where: {
        auctionName: ILike('%' + attrs.auctionName + '%'),
      },
      relations: ['member'],
    });
    console.log(attrs.auctionName);
    console.log(auctions);
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
