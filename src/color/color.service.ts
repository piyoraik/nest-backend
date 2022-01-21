import { Injectable } from '@nestjs/common';
import { Color } from 'src/entity/color.entity';
import { ColorRepository } from './color.repository';
import { CreateColorDTO } from './dto/create.color.dto';

@Injectable()
// color.service.ts
export class ColorService {
  constructor(private colorRepository: ColorRepository) {}

  // create
  async create(createColorDTO: CreateColorDTO) {
    return await this.colorRepository.createColor(createColorDTO);
  }

  // findAll
  async findAll() {
    return await this.colorRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.colorRepository.findOneColor({ id });
  }

  // findOne
  async findOne(attrs: Partial<Color>) {
    return await this.colorRepository.findOneColor(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Color>) {
    return await this.colorRepository.findWhereLikeColor(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Color>) {
    return await this.colorRepository.updateColor(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.colorRepository.softDeleteColor(id);
  }
}
