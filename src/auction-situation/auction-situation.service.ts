import { Injectable } from '@nestjs/common';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { MembersService } from 'src/members/members.service';
import { AuctionSituationRepository } from './auction-situation.repository';
import { CreateAuctionSituationDTO } from './dto/create.auction-situation.dto';

@Injectable()
export class AuctionSituationService {
  constructor(
    private readonly auctionSituationRepository: AuctionSituationRepository,
    private readonly memberService: MembersService,
  ) {}

  async create(
    createAuctionSituation: CreateAuctionSituationDTO,
    payloadMember: PayLoad,
    auctionListing: AuctionListing,
  ) {
    const member = await this.memberService.findOne({
      email: payloadMember.email,
    });
    const auctionSituation =
      await this.auctionSituationRepository.createAuctionSituation(
        createAuctionSituation,
        member,
        auctionListing,
      );
    return auctionSituation;
  }

  async findOneId(id: number) {
    return await this.auctionSituationRepository.findOneAuctionSituation({
      id,
    });
  }

  async findOne(attrs: Partial<AuctionSituation>) {
    return await this.auctionSituationRepository.findOneAuctionSituation(attrs);
  }

  async findWhere(attrs: Partial<AuctionSituation>) {
    return await this.auctionSituationRepository.findOneAuctionSituation(attrs);
  }
}
