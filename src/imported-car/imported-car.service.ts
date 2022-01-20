import { Injectable } from '@nestjs/common';
import { ImportedCarRepository } from './imported-car.repository';

@Injectable()
export class ImportedCarService {
    constructor(
        private importedCarRepository: ImportedCarRepository,
      ) {}
}
