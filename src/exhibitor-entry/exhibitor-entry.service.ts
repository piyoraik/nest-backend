import { Injectable } from '@nestjs/common';
import { ExhibitorEntryRepository } from './exhibitor-entry.repository';

@Injectable()
export class ExhibitorEntryService {
    constructor(
        private exhibitorEntryRepository: ExhibitorEntryRepository,
      ) {}
}
