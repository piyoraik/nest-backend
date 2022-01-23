import { NotFoundException } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { SuggestedListing } from 'src/entity/suggested.listing.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateSuggestedListingDTO } from './dto/create.suggested-listing.dto';

@EntityRepository(SuggestedListing)
export class SuggestedListingRepository extends Repository<SuggestedListing> {
  async createSuggestedListing(
    createSuggestedListingDTO: CreateSuggestedListingDTO,
    listingCar: ListingCar,
  ) {
    const suggestedListing = this.create({
      listingCar,
      ...createSuggestedListingDTO,
    });
    await this.save(suggestedListing);
    return suggestedListing;
  }

  async findOneSuggestedListing(attrs: Partial<SuggestedListing>) {
    const suggestedListing = await this.findOne(attrs);
    if (!suggestedListing) {
      throw new NotFoundException('SuggestedListing Not Found');
    }
    return suggestedListing;
  }

  async findWhereSuggestedListing(attrs: Partial<SuggestedListing>) {
    const parseAttrs: Partial<SuggestedListing> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const suggestedListings = await this.find({
      where: parseAttrs,
    });
    if (!suggestedListings) {
      throw new NotFoundException('SuggestedListing Not Found');
    }
    return suggestedListings;
  }

  async updateSuggestedListing(id: number, attrs: Partial<SuggestedListing>) {
    const suggestedListing = await this.findOneSuggestedListing(attrs);
    Object.assign(suggestedListing, attrs);
    await this.save(suggestedListing);
    return suggestedListing;
  }

  async softDeleteSuggestedListing(id: number) {
    const suggestedListing = await this.findOneSuggestedListing({ id });
    await this.softRemove(suggestedListing);
    return suggestedListing;
  }
}
