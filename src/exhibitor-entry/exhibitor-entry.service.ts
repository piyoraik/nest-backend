import { Injectable } from '@nestjs/common';
import { ExhibitorEntry } from 'src/entity/exhibitor.entry.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CreateExhibitorEntryDTO } from './dto/create.exhibitor-entry.dto';
import { ExhibitorEntryRepository } from './exhibitor-entry.repository';

@Injectable()

// exhibitorEntry.service.ts
export class ExhibitorEntryService {
  constructor(private exhibitorEntryRepository: ExhibitorEntryRepository) {}

  // create
  async create(
    createExhibitorEntryDTO: CreateExhibitorEntryDTO,
    listingCar: ListingCar,
  ) {
    return await this.exhibitorEntryRepository.createExhibitorEntry(
      createExhibitorEntryDTO,
      listingCar,
    );
  }

  // findAll
  async findAll() {
    return await this.exhibitorEntryRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.exhibitorEntryRepository.findOneExhibitorEntry({ id });
  }

  // findOne
  async findOne(attrs: Partial<ExhibitorEntry>) {
    return await this.exhibitorEntryRepository.findOneExhibitorEntry(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<ExhibitorEntry>) {
    return await this.exhibitorEntryRepository.findWhereLikeExhibitorEntry(
      attrs,
    );
  }

  // update
  async update(id: number, attrs: Partial<ExhibitorEntry>) {
    return await this.exhibitorEntryRepository.updateExhibitorEntry(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.exhibitorEntryRepository.softDeleteExhibitorEntry(id);
  }
}
