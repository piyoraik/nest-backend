import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { Members } from 'src/entity/member.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateAuctionSituationDTO } from './dto/create.auction-situation.dto';

@EntityRepository(AuctionSituation)
export class AuctionSituationRepository extends Repository<AuctionSituation> {
  async createAuctionSituation(
    createAuctionSituationDTO: CreateAuctionSituationDTO,
    member: Members,
  ) {
    const auctionSituation = this.create({
      member,
      bidTime: new Date(),
      ...createAuctionSituationDTO,
    });
    await this.save(auctionSituation);
    return auctionSituation;
  }
}
