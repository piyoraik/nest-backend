import { Injectable } from '@nestjs/common';
import { AirConditioner } from 'src/entity/air.conditioner.entity';
import { AirConditionerRepository } from './air-conditioner.repository';
import { CreateAirConditionerDTO } from './dto/create.air-conditioner.dto';

@Injectable()
// airConditioner.service.ts
export class AirConditionerService {
  constructor(private airConditionerRepository: AirConditionerRepository) {}

  // create
  async create(createAirConditionerDTO: CreateAirConditionerDTO) {
    return await this.airConditionerRepository.createAirConditioner(
      createAirConditionerDTO,
    );
  }

  // findAll
  async findAll() {
    return await this.airConditionerRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.airConditionerRepository.findOneAirConditioner({ id });
  }

  // findOne
  async findOne(attrs: Partial<AirConditioner>) {
    return await this.airConditionerRepository.findOneAirConditioner(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<AirConditioner>) {
    return await this.airConditionerRepository.findWhereLikeAirConditioner(
      attrs,
    );
  }

  // update
  async update(id: number, attrs: Partial<AirConditioner>) {
    return await this.airConditionerRepository.updateAirConditioner(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.airConditionerRepository.softDeleteAirConditioner(id);
  }
}
