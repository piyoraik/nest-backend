import { NotFoundException } from '@nestjs/common';
import { Color } from 'src/entity/color.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateColorDTO } from './dto/create.color.dto';

@EntityRepository(Color)
export class ColorRepository extends Repository<Color> {
  // Createの操作
  async createColor(createColorDTO: CreateColorDTO) {
    const color = this.create({
      ...createColorDTO,
    });
    await this.save(color);
    return color;
  }

  // findOne
  async findOneColor(attrs: Partial<Color>) {
    const color = await this.findOne(attrs);
    if (!color) {
      throw new NotFoundException('Color Not Found');
    }
    return color;
  }

  // findWhere
  async findWhereLikeColor(attrs: Partial<Color>) {
    const parseAttrs: Partial<Color> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const colors = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!colors) {
      throw new NotFoundException('Color Not Found');
    }
    return colors;
  }

  // update
  async updateColor(id: number, attrs: Partial<Color>) {
    const color = await this.findOneColor({ id });
    Object.assign(color, attrs);
    await this.save(color);
    return color;
  }

  // softDelete
  async softDeleteColor(id: number) {
    const color = await this.findOneColor({ id });
    await this.softRemove(color);
    return color;
  }
}
