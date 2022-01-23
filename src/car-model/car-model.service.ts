import { Injectable } from '@nestjs/common';
import { CarModel } from 'src/entity/car.model.entity';
import { CarModelRepository } from './car-model.repository';
import { CreateCarModelDTO } from './dto/create.car-model.dto';

@Injectable()
// carModel.service.ts
export class CarModelService {
  constructor(private carModelRepository: CarModelRepository) {}

  // create
  async create(createCarModelDTO: CreateCarModelDTO) {
    const res = await this.carModelRepository.createCarModel(createCarModelDTO);
    return await this.findOneID(res.id);
  }

  // findAll
  async findAll() {
    return await this.carModelRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.carModelRepository.findOneCarModel({ id });
  }

  // findOne
  async findOne(attrs: Partial<CarModel>) {
    return await this.carModelRepository.findOneCarModel(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<CarModel>) {
    return await this.carModelRepository.findWhereLikeCarModel(attrs);
  }

  // update
  async update(id: number, attrs: Partial<CarModel>) {
    return await this.carModelRepository.updateCarModel(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.carModelRepository.softDeleteCarModel(id);
  }
}
