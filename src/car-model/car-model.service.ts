import { Injectable } from '@nestjs/common';
import { CarModelRepository } from './car-model.repository';
import { CreateCarModelDTO } from './dto/create.car-model.dto';

@Injectable()
export class CarModelService {
  constructor(private carModelRepository: CarModelRepository) {}
  // create
  async create(createCarModelDTO: CreateCarModelDTO) {
    return this.carModelRepository.createCarModel(createCarModelDTO);
  }
}
