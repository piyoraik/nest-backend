import { Injectable } from '@nestjs/common';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { Auction } from 'src/entity/auction.entity';
import { MemberService } from 'src/member/member.service';
import { AuctionRepository } from './auction.repository';
import { CreateAuctionDto } from './dto/create-auction.dto';

@Injectable()
export class AuctionService {
  constructor(
    private auctionRepository: AuctionRepository,
    private memberService: MemberService,
  ) {}

  fetchAll() {
    return this.auctionRepository.find({ relations: ['member'] });
  }

  async create(createAuctionDTO: CreateAuctionDto, attrsMember: PayLoad) {
    const member = await this.memberService.findOne({
      email: attrsMember.email,
    });
    return this.auctionRepository.createAuction(createAuctionDTO, member);
  }

  async findOne(id: number) {
    return await this.auctionRepository.findOneAuction({ id });
  }

  async update(id: number, attrs: Partial<Auction>) {
    return this.auctionRepository.updateAuction(id, attrs);
  }

  async softDelete(id: number) {
    return this.auctionRepository.softDeleteAuction(id);
  }

  async findWhere(attrs: Partial<Auction>) {
    return await this.auctionRepository.findWhereAuction(attrs);
  }

  async findWhereLike(attrs: Partial<Auction>) {
    return await this.auctionRepository.findWhereLikeAuction(attrs);
  }
}
