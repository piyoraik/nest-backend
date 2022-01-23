import { Injectable } from '@nestjs/common';
import { AuctionListingService } from 'src/auction-listing/auction-listing.service';
import { Price } from 'src/entity/price.entity';
import { CreatePriceDTO } from './dto/create.price.dto';
import { PriceRepository } from './price.repository';

@Injectable()
export class PriceService {
  constructor(
    private readonly priceRepository: PriceRepository,
    private readonly auctionListingService: AuctionListingService,
  ) {}

  async create(createPriceDTO: CreatePriceDTO, auctionListingId: number) {
    const auctionListing = await this.auctionListingService.findOneID(
      auctionListingId,
    );
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
