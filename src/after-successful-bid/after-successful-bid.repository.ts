import { AfterSuccessfulBid } from "src/entity/after.successful.bid.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(AfterSuccessfulBid)
export class AfterSuccessfulBidRepository extends Repository<AfterSuccessfulBid> {} 