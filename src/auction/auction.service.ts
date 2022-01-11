import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from 'src/entity/auction.entity';
import { Repository } from 'typeorm';
import { CreateAuctionDto } from './dto/create-auction.dto';

@Injectable()
export class AuctionService {
  constructor(
    @InjectRepository(Auction)
    private readonly auctionRepo: Repository<Auction>,
  ) {}

  fetchAll() {
    return this.auctionRepo.find();
  }

  create(createAuctionDTO: CreateAuctionDto) {
    const auction = this.auctionRepo.create(createAuctionDTO);
    return this.auctionRepo.save(auction);
  }
}
