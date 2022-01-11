import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Auction } from 'src/entity/auction.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuctionService {
  constructor(
    @InjectRepository(Auction) private readonly repo: Repository<Auction>,
  ) {}

  fetchAll() {
    return this.repo.find();
  }

  
}
