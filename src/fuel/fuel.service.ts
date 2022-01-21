import { Injectable } from '@nestjs/common';
import { Fuel } from 'src/entity/fuel.entity';
import { CreateFuelDTO } from './dto/create.fuel.dto';
import { FuelRepository } from './fuel.repository';

@Injectable()
// fuel.service.ts
export class FuelService {
  constructor(private fuelRepository: FuelRepository) {}

  // create
  async create(createFuelDTO: CreateFuelDTO) {
    return await this.fuelRepository.createFuel(createFuelDTO);
  }

  // findAll
  async findAll() {
    return await this.fuelRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.fuelRepository.findOneFuel({ id });
  }

  // findOne
  async findOne(attrs: Partial<Fuel>) {
    return await this.fuelRepository.findOneFuel(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Fuel>) {
    return await this.fuelRepository.findWhereLikeFuel(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Fuel>) {
    return await this.fuelRepository.updateFuel(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.fuelRepository.softDeleteFuel(id);
  }
}
