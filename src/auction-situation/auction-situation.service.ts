import { Injectable } from '@nestjs/common';
import { AuctionListingService } from 'src/auction-listing/auction-listing.service';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { AuctionSituation } from 'src/entity/auction.situation.entity';
import { MembersService } from 'src/members/members.service';
import { AuctionSituationRepository } from './auction-situation.repository';
import { CreateAuctionSituationDTO } from './dto/create.auction-situation.dto';

@Injectable()
export class AuctionSituationService {
  constructor(
    private readonly auctionSituationRepository: AuctionSituationRepository,
    private readonly memberService: MembersService,
    private readonly auctionListingService: AuctionListingService,
  ) {}

  async create(
    createAuctionSituation: CreateAuctionSituationDTO,
    payloadMember: PayLoad,
    auctionListingID: number,
  ) {
    const member = await this.memberService.findOne({
      email: payloadMember.email,
    });
    const auctionListing = await this.auctionListingService.findOneID(
      auctionListingID,
    );
    const res = await this.auctionSituationRepository.createAuctionSituation(
      createAuctionSituation,
      member,
      auctionListing,
    );
    return await this.findOneId(res.id);
  }

  async findAll() {
    return await this.auctionSituationRepository.findAll();
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

  // update
  async update(id: number, attrs: Partial<AuctionSituation>) {
    return await this.auctionSituationRepository.updateAuctionSituation(
      id,
      attrs,
    );
  }

  // softDelete
  async softDelete(id: number) {
    return await this.auctionSituationRepository.softDeleteAuctionSituation(id);
  }
}
