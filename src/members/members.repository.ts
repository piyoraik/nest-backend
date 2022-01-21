import { NotFoundException } from '@nestjs/common';
import { Auction } from 'src/entity/auction.entity';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { Members } from 'src/entity/members.entity';
import { Purchase } from 'src/entity/purchase.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateMembersDTO } from './dto/create-members-dto';

@EntityRepository(Members)
export class MembersRepository extends Repository<Members> {
  // Createの操作
  async createMembers(
    createMembersDTO: CreateMembersDTO,
    auctionSituation: AuctionSituation,
    auction: Auction,
    purchase: Purchase,
  ) {
    const members = this.create({
      ...createMembersDTO,
      auctionSituation,
      auction,
      purchase,
    });
    await this.save(members);
    return members;
  }

  // findOne
  async findOneMembers(attrs: Partial<Members>) {
    const members = await this.findOne(attrs);
    if (!members) {
      throw new NotFoundException('Members Not Found');
    }
    return members;
  }

  // findWhere
  async findWhereLikeMembers(attrs: Partial<Members>) {
    const parseAttrs: Partial<Members> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const memberss = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!memberss) {
      throw new NotFoundException('Members Not Found');
    }
    return memberss;
  }

  // update
  async updateMembers(id: number, attrs: Partial<Members>) {
    const members = await this.findOneMembers({ id });
    Object.assign(members, attrs);
    await this.save(members);
    return members;
  }

  // softDelete
  async softDeleteMembers(id: number) {
    const members = await this.findOneMembers({ id });
    await this.softRemove(members);
    return members;
  }
}
