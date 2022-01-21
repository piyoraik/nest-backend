import { NotFoundException } from '@nestjs/common';
import { Maker } from 'src/entity/maker.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateMakerDTO } from './dto/create.maker.dto';

@EntityRepository(Maker)
export class MakerRepository extends Repository<Maker> {
  // Createの操作
  async createMaker(createMakerDTO: CreateMakerDTO) {
    const maker = this.create({
      ...createMakerDTO,
    });
    await this.save(maker);
    return maker;
  }

  // findOne
  async findOneMaker(attrs: Partial<Maker>) {
    const maker = await this.findOne(attrs);
    if (!maker) {
      throw new NotFoundException('Maker Not Found');
    }
    return maker;
  }

  // findWhere
  async findWhereLikeMaker(attrs: Partial<Maker>) {
    const parseAttrs: Partial<Maker> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const makers = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!makers) {
      throw new NotFoundException('Maker Not Found');
    }
    return makers;
  }

  // update
  async updateMaker(id: number, attrs: Partial<Maker>) {
    const maker = await this.findOneMaker({ id });
    Object.assign(maker, attrs);
    await this.save(maker);
    return maker;
  }

  // softDelete
  async softDeleteMaker(id: number) {
    const maker = await this.findOneMaker({ id });
    await this.softRemove(maker);
    return maker;
  }
}
