import { Injectable } from '@nestjs/common';
import { CarModelRepository } from './car-model.repository';

@Injectable()
export class CarModelService {
    constructor(
        private carModelRepository: CarModelRepository,
      ) {}
}
