import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CreateExhibitorEntryDTO } from './dto/create.exhibitor-entry.dto';
import { ExhibitorEntryRepository } from './exhibitor-entry.repository';

@Injectable()
export class ExhibitorEntryService {
  constructor(private exhibitorEntryRepository: ExhibitorEntryRepository) {}

  async create(
    createExhibitorEntryDTO: CreateExhibitorEntryDTO,
    listingCar: ListingCar,
  ) {
    return this.exhibitorEntryRepository.createExhibitorEntry(
      createExhibitorEntryDTO,
      listingCar,
    );
  }
}
