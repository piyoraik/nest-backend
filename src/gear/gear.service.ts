import { Injectable } from '@nestjs/common';
import { Gear } from 'src/entity/gear.entity';
import { CreateGearDTO } from './dto/create.gear.dto';
import { GearRepository } from './gear.repository';

@Injectable()
// gear.service.ts
export class GearService {
  constructor(private gearRepository: GearRepository) {}
  // create
  async create(createGearDTO: CreateGearDTO) {
    return await this.gearRepository.createGear(createGearDTO);
  }

  // findAll
  async findAll() {
    return await this.gearRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.gearRepository.findOneGear({ id });
  }

  // findOne
  async findOne(attrs: Partial<Gear>) {
    return await this.gearRepository.findOneGear(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Gear>) {
    return await this.gearRepository.findWhereLikeGear(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Gear>) {
    return await this.gearRepository.updateGear(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.gearRepository.softDeleteGear(id);
  }
}
