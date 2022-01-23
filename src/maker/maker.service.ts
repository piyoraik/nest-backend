import { Injectable } from '@nestjs/common';
import { Maker } from 'src/entity/maker.entity';
import { CreateMakerDTO } from './dto/create.maker.dto';
import { MakerRepository } from './maker.repository';

@Injectable()
// maker.service.ts
export class MakerService {
  constructor(private makerRepository: MakerRepository) {}

  // create
  async create(createMakerDTO: CreateMakerDTO) {
    const res = await this.makerRepository.createMaker(createMakerDTO);
    return await this.findOneID(res.id);
  }

  // findAll
  async findAll() {
    return await this.makerRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.makerRepository.findOneMaker({ id });
  }

  // findOne
  async findOne(attrs: Partial<Maker>) {
    return await this.makerRepository.findOneMaker(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Maker>) {
    return await this.makerRepository.findWhereLikeMaker(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Maker>) {
    return await this.makerRepository.updateMaker(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.makerRepository.softDeleteMaker(id);
  }
}
