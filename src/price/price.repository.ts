import { NotFoundException } from '@nestjs/common';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { Price } from 'src/entity/price.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePriceDTO } from './dto/create.price.dto';

@EntityRepository(Price)
export class PriceRepository extends Repository<Price> {
  async createPrice(
    createPriceDTO: CreatePriceDTO,
    auctionListing: AuctionListing,
  ) {
    const price = this.create({
      auctionListing,
      ...createPriceDTO,
    });
    await this.save(price);
    return price;
  }

  async findOnePrice(attrs: Partial<Price>) {
    const price = await this.findOne({
      where: attrs,
      relations: ['auctionListing'],
    });
    if (!price) {
      throw new NotFoundException('Price Not Found');
    }
    return price;
  }

  async findWherePrice(attrs: Partial<Price>) {
    const price = await this.find({
      where: attrs,
      relations: ['auctionListing'],
    });
    if (!price) {
      throw new NotFoundException('Price Not Found');
    }
    return price;
  }

  async updatePrice(id: number, attrs: Partial<Price>) {
    const price = await this.findOnePrice({ id });
    Object.assign(price, attrs);
    await this.save(price);
    return price;
  }

  async softDeletePrice(id: number) {
    const price = await this.findOnePrice({ id });
    await this.softRemove(price);
    return price;
  }
}
