import { Injectable } from '@nestjs/common';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { Price } from 'src/entity/price.entity';
import { CreatePriceDTO } from './dto/create.price.dto';
import { PriceRepository } from './price.repository';

@Injectable()
export class PriceService {
  constructor(private readonly priceRepository: PriceRepository) {}

  async create(createPriceDTO: CreatePriceDTO, auctionListing: AuctionListing) {
    return await this.priceRepository.createPrice(
      createPriceDTO,
      auctionListing,
    );
  }

  async findAll() {
    return await this.priceRepository.find();
  }

  async findOneId(id: number) {
    return await this.priceRepository.findOnePrice({ id });
  }

  async find(attrs: Partial<Price>) {
    return await this.priceRepository.findOnePrice(attrs);
  }

  async update(id: number, attrs: Partial<Price>) {
    return await this.priceRepository.updatePrice(id, attrs);
  }

  async delete(id: number) {
    return await this.priceRepository.softDeletePrice(id);
  }
}
