import { Injectable } from '@nestjs/common';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { Members } from 'src/entity/member.entity';
import { MemberService } from 'src/member/member.service';
import { AuctionSituationRepository } from './auction-situation.repository';
import { CreateAuctionSituationDTO } from './dto/create.auction-situation.dto';

@Injectable()
export class AuctionSituationService {
  constructor(
    private readonly auctionSituationRepository: AuctionSituationRepository,
    private readonly memberService: MemberService,
  ) {}

  async create(
    createAuctionSituation: CreateAuctionSituationDTO,
    payloadMember: PayLoad,
  ) {
    const member = await this.memberService.findOne({
      email: payloadMember.email,
    });
    const auctionSituation =
      await this.auctionSituationRepository.createAuctionSituation(
        createAuctionSituation,
        member,
      );
    return auctionSituation;
  }
}
