import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from 'src/entity/auction.entity';
import { Members } from 'src/entity/member.entity';
import { Repository } from 'typeorm';
import { AuctionRepository } from './auction.repository';
import { CreateAuctionDto } from './dto/create-auction.dto';

@Injectable()
export class AuctionService {
  constructor(private auctionRepository: AuctionRepository) {}

  fetchAll() {
    return this.auctionRepository.find();
  }

  create(createAuctionDTO: CreateAuctionDto, member: Members) {
    return this.auctionRepository.createAuction(createAuctionDTO, member);
  }

  findOne(id: number) {
    return this.auctionRepository.findOneAuction({ id });
  }

  async update(id: number, attrs: Partial<Auction>) {
    return this.auctionRepository.updateAuction(id, attrs);
  }

  async softDelete(id: number) {
    return this.auctionRepository.softDeleteAuction(id);
  }
}
