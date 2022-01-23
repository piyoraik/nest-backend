import { Injectable } from '@nestjs/common';
import { Shape } from 'src/entity/shape.entity';
import { CreateShapeDTO } from './dto/create.shape.dto';
import { ShapeRepository } from './shape.repository';

@Injectable()
// shape.service.ts
export class ShapeService {
  constructor(private shapeRepository: ShapeRepository) {}

  // create
  async create(createShapeDTO: CreateShapeDTO) {
    const res = await this.shapeRepository.createShape(createShapeDTO);
    return await this.findOneID(res.id);
  }

  // findAll
  async findAll() {
    return await this.shapeRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.shapeRepository.findOneShape({ id });
  }

  // findOne
  async findOne(attrs: Partial<Shape>) {
    return await this.shapeRepository.findOneShape(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Shape>) {
    return await this.shapeRepository.findWhereLikeShape(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Shape>) {
    return await this.shapeRepository.updateShape(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.shapeRepository.softDeleteShape(id);
  }
}
