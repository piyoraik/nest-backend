import { Injectable } from '@nestjs/common';
import { AirBack } from 'src/entity/air.back.entity';
import { AirBackRepository } from './air-back.repository';
import { CreateAirBackDTO } from './dto/create.air-back.dto';

@Injectable()

// airBack.service.ts
export class AirBackService {
  constructor(private airBackRepository: AirBackRepository) {}

  // create
  async create(createAirBackDTO: CreateAirBackDTO) {
    return await this.airBackRepository.createAirBack(createAirBackDTO);
  }

  // findAll
  async findAll() {
    return await this.airBackRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.airBackRepository.findOneAirBack({ id });
  }

  // findOne
  async findOne(attrs: Partial<AirBack>) {
    return await this.airBackRepository.findOneAirBack(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<AirBack>) {
    return await this.airBackRepository.findWhereLikeAirBack(attrs);
  }

  // update
  async update(id: number, attrs: Partial<AirBack>) {
    return await this.airBackRepository.updateAirBack(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.airBackRepository.softDeleteAirBack(id);
  }
}
