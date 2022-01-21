import { Injectable } from '@nestjs/common';
import { CarBodyNumberRepository } from './car-body-number.repository';

@Injectable()
export class CarBodyNumberService {
  constructor(private carBodyNumberRepository: CarBodyNumberRepository) {}

  // findOneID
  async findOneID(id: number) {
    return await this.carBodyNumberRepository.findOneCarBodyNumber({ id });
  }
}
