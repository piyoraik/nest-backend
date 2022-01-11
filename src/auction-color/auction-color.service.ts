import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuctionColor } from 'src/entity/auction.color.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuctionColorService {
  constructor(
    @InjectRepository(AuctionColor)
    private readonly auctionColorRepo: Repository<AuctionColor>,
  ) {}

  fetchAll() {
    return this.auctionColorRepo.find();
  }
}
