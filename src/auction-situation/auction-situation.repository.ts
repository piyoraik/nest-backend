import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(AuctionSituation)
export class AuctionSituationRepository extends Repository<AuctionSituation> {}
