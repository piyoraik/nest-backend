import { Injectable } from '@nestjs/common';
import { FuelRepository } from './fuel.repository';

@Injectable()
export class FuelService {
    constructor(
        private fuelRepository: FuelRepository,
      ) {}
}
