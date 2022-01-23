import { NotFoundException } from '@nestjs/common';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { Members } from 'src/entity/members.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAuctionSituationDTO } from './dto/create.auction-situation.dto';

@EntityRepository(AuctionSituation)
export class AuctionSituationRepository extends Repository<AuctionSituation> {
  async createAuctionSituation(
    createAuctionSituationDTO: CreateAuctionSituationDTO,
    member: Members,
    auctionListing: AuctionListing,
  ) {
    const auctionSituation = this.create({
      member,
      bidTime: new Date(),
      ...createAuctionSituationDTO,
      auctionListing,
    });
    await this.save(auctionSituation);
    return auctionSituation;
  }

  async findAll() {
    return this.find({ relations: ['member', 'auctionListing'] });
  }

  async findOneAuctionSituation(attrs: Partial<AuctionSituation>) {
    const auctionSituation = await this.findOne({
      where: attrs,
      relations: ['member', 'auctionListing'],
    });
    if (!auctionSituation) {
      throw new NotFoundException('AuctionSituation Not Found');
    }
    return auctionSituation;
  }

  async findWhereAuctionSituation(attrs: Partial<AuctionSituation>) {
    const parseAttrs: Partial<AuctionSituation> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const auctionSituations = await this.find({
      where: parseAttrs,
      relations: ['member', 'auctionListing'],
    });
    if (!auctionSituations) {
      throw new NotFoundException('AuctionSituation Not Found');
    }
    return auctionSituations;
  }

  // update
  async updateAuctionSituation(id: number, attrs: Partial<AuctionSituation>) {
    const auctionSituation = await this.findOneAuctionSituation({ id });
    Object.assign(auctionSituation, attrs);
    await this.save(auctionSituation);
    return auctionSituation;
  }

  // softDelete
  async softDeleteAuctionSituation(id: number) {
    const auctionSituation = await this.findOneAuctionSituation({ id });
    await this.softRemove(auctionSituation);
    return auctionSituation;
  }
}
