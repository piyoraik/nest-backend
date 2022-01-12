import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuctionColor } from 'src/entity/auction.color.entity';
import { Repository } from 'typeorm';
import { CreateAuctionColorDTO } from './dto/create-auctioncolor-dto';

@Injectable()
export class AuctionColorService {
  constructor(
    @InjectRepository(AuctionColor)
    private readonly auctionColorRepo: Repository<AuctionColor>,
  ) {}

  fetchAll() {
    return this.auctionColorRepo.find();
  }

  create(createAuctionColorDTO: CreateAuctionColorDTO) {
    const color = this.auctionColorRepo.create(createAuctionColorDTO);
    return this.auctionColorRepo.save(color);
  }

  findOne(id: number) {
    const color = this.auctionColorRepo.findOne(+id);
    if (!color) {
      throw new NotFoundException('Color Not Found');
    }
    return color;
  }

  async update(id: number, attrs: Partial<AuctionColor>) {
    const color = await this.auctionColorRepo.findOne({ id });
    if (!color) {
      throw new NotFoundException('Color Not Found');
    }
    Object.assign(color, attrs);
    return this.auctionColorRepo.save(color);
  }

  async softDelete(id: number) {
    const color = await this.auctionColorRepo.findOne(+id);
    if (!color) {
      throw new NotFoundException('Color Not Found');
    }
    return this.auctionColorRepo.softRemove(color);
  }
}
