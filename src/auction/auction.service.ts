import { Injectable } from '@nestjs/common';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { Auction } from 'src/entity/auction.entity';
import { MembersService } from 'src/members/members.service';
import { AuctionRepository } from './auction.repository';
import { CreateAuctionDto } from './dto/create-auction.dto';

@Injectable()
export class AuctionService {
  constructor(
    private auctionRepository: AuctionRepository,
    private memberService: MembersService,
  ) {}

  fetchAll() {
    return this.auctionRepository.find({ relations: ['member'] });
  }

  async create(createAuctionDTO: CreateAuctionDto, attrsMember: PayLoad) {
    const member = await this.memberService.findOne({
      email: attrsMember.email,
    });
    const res = await this.auctionRepository.createAuction(
      createAuctionDTO,
      member,
    );
    return await this.findOneId(res.id);
  }

  async findOneId(id: number) {
    return await this.auctionRepository.findOneAuction({ id });
  }

  async findOne(attrs: Partial<Auction>) {
    return await this.auctionRepository.findOneAuction(attrs);
  }

  async findWhere(attrs: Partial<Auction>) {
    return await this.auctionRepository.findWhereLikeAuction(attrs);
  }

  async update(id: number, attrs: Partial<Auction>) {
    return this.auctionRepository.updateAuction(id, attrs);
  }

  async softDelete(id: number) {
    return this.auctionRepository.softDeleteAuction(id);
  }

  async findWhereLike(attrs: Partial<Auction>) {
    return await this.auctionRepository.findWhereLikeAuction(attrs);
  }
}
