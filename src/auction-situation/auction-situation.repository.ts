import { NotFoundException } from '@nestjs/common';
import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { Members } from 'src/entity/members.entity';
import { EntityRepository, Repository } from 'typeorm';
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
    return this.find({ relations: ['member'] });
  }

  async findOneAuctionSituation(attrs: Partial<AuctionSituation>) {
    const auctionSituation = await this.findOne({
      where: attrs,
      relations: ['member'],
    });
    if (!auctionSituation) {
      throw new NotFoundException('AuctionSituation Not Found');
    }
    return auctionSituation;
  }

  async findWhereAuctionSituation(attrs: Partial<AuctionSituation>) {
    const auctionSituations = await this.find({
      where: attrs,
      relations: ['member'],
    });
    if (!auctionSituations) {
      throw new NotFoundException('AuctionSituation Not Found');
    }
    return auctionSituations;
  }
}
