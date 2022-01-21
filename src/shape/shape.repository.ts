import { NotFoundException } from '@nestjs/common';
import { Shape } from 'src/entity/shape.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateShapeDTO } from './dto/create.shape.dto';

@EntityRepository(Shape)
export class ShapeRepository extends Repository<Shape> {
  // Createの操作
  async createShape(createShapeDTO: CreateShapeDTO) {
    const shape = this.create({
      ...createShapeDTO,
    });
    await this.save(shape);
    return shape;
  }

  // findOne
  async findOneShape(attrs: Partial<Shape>) {
    const shape = await this.findOne(attrs);
    if (!shape) {
      throw new NotFoundException('Shape Not Found');
    }
    return shape;
  }

  // findWhere
  async findWhereLikeShape(attrs: Partial<Shape>) {
    const parseAttrs: Partial<Shape> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const shapes = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!shapes) {
      throw new NotFoundException('Shape Not Found');
    }
    return shapes;
  }

  // update
  async updateShape(id: number, attrs: Partial<Shape>) {
    const shape = await this.findOneShape({ id });
    Object.assign(shape, attrs);
    await this.save(shape);
    return shape;
  }

  // softDelete
  async softDeleteShape(id: number) {
    const shape = await this.findOneShape({ id });
    await this.softRemove(shape);
    return shape;
  }
}
