import { Injectable } from '@nestjs/common';
import { CarBodyNumberRepository } from './car-body-number.repository';

@Injectable()
export class CarBodyNumberService {
    constructor(
        private carBodyNumberRepository: CarBodyNumberRepository,
      ) {}
}
