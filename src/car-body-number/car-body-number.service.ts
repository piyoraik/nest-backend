import { Injectable } from '@nestjs/common';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { CarBodyNumberRepository } from './car-body-number.repository';
import {
  CreateCarBodyNumberDTO,
  CreateCarBodyNumberForeignKeyDTO,
} from './dto/create.car-body-number.dto';

@Injectable()
// carBodyNumber.service.ts
export class CarBodyNumberService {
  constructor(
    private readonly carBodyNumberRepository: CarBodyNumberRepository,
  ) {}

  // create
  async create(
    createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    createCarBodyNumberForeignKey: CreateCarBodyNumberForeignKeyDTO,
    listingCarId: number,
  ) {
    return await this.carBodyNumberRepository.createCarBodyNumber(
      createCarBodyNumberDTO,
      createCarBodyNumberForeignKey,
      listingCarId,
    );
  }

  // findAll
  async findAll() {
    return await this.carBodyNumberRepository.find({
      relations: [
        'listingCar',
        'maker',
        'carModel',
        'shift',
        'gear',
        'fuel',
        'airBack',
        'handle',
        'airConditoner',
        'shape',
        'importedCar',
        'exteriorColor',
        'interiorColor',
      ],
    });
  }

  // findOneID
  async findOneID(id: number) {
    return await this.carBodyNumberRepository.findOneCarBodyNumber({ id });
  }

  // findOne
  async findOne(attrs: Partial<CarBodyNumber>) {
    return await this.carBodyNumberRepository.findOneCarBodyNumber(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<CarBodyNumber>) {
    return await this.carBodyNumberRepository.findWhereLikeCarBodyNumber(attrs);
  }

  // update
  async update(id: number, attrs: Partial<CarBodyNumber>) {
    return await this.carBodyNumberRepository.updateCarBodyNumber(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.carBodyNumberRepository.softDeleteCarBodyNumber(id);
  }
}
