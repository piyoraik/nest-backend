import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { SuggestedListing } from 'src/entity/suggested.listing.entity';
import { CreateSuggestedListingDTO } from './dto/create.suggested-listing.dto';
import { SuggestedListingRepository } from './suggested-listing.repository';

@Injectable()
// suggestedListing.service.ts
export class SuggestedListingService {
  constructor(private suggestedListingRepository: SuggestedListingRepository) {}

  // create
  async create(
    createSuggestedListingDTO: CreateSuggestedListingDTO,
    listingCar: ListingCar,
  ) {
    return await this.suggestedListingRepository.createSuggestedListing(
      createSuggestedListingDTO,
      listingCar,
    );
  }

  // findAll
  async findAll() {
    return await this.suggestedListingRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.suggestedListingRepository.findOneSuggestedListing({
      id,
    });
  }

  // findOne
  async findOne(attrs: Partial<SuggestedListing>) {
    return await this.suggestedListingRepository.findOneSuggestedListing(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<SuggestedListing>) {
    return await this.suggestedListingRepository.findWhereSuggestedListing(
      attrs,
    );
  }

  // update
  async update(id: number, attrs: Partial<SuggestedListing>) {
    return await this.suggestedListingRepository.updateSuggestedListing(
      id,
      attrs,
    );
  }

  // softDelete
  async softDelete(id: number) {
    return await this.suggestedListingRepository.softDeleteSuggestedListing(id);
  }
}
