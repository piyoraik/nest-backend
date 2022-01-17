import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { SuggestedListing } from 'src/entity/suggested.listing.entity';
import { CreateSuggestedListingDTO } from './dto/create.suggested-listing.dto';
import { SuggestedListingRepository } from './suggested-listing.repository';

@Injectable()
export class SuggestedListingService {
  constructor(
    private readonly suggestedListingRepository: SuggestedListingRepository,
  ) {}

  async create(
    createSuggestedListingDTO: CreateSuggestedListingDTO,
    listingCar: ListingCar,
  ) {
    return await this.suggestedListingRepository.createSuggestedListing(
      createSuggestedListingDTO,
      listingCar,
    );
  }

  async findOneId(id: number) {
    return await this.suggestedListingRepository.findOneSuggestedListing({
      id,
    });
  }

  async findOne(attrs: Partial<SuggestedListing>) {
    return await this.suggestedListingRepository.findOneSuggestedListing(attrs);
  }

  async find(attrs: Partial<SuggestedListing>) {
    return await this.suggestedListingRepository.findOneSuggestedListing(attrs);
  }

  async delete(id: number) {
    return await this.suggestedListingRepository.softDeleteSuggestedListing(id);
  }
}
