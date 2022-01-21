import { NotFoundException } from '@nestjs/common';
import { Gear } from 'src/entity/gear.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateGearDTO } from './dto/create.gear.dto';

@EntityRepository(Gear)
export class GearRepository extends Repository<Gear> {
  // Createの操作
  async createGear(createGearDTO: CreateGearDTO) {
    const gear = this.create({
      ...createGearDTO,
    });
    await this.save(gear);
    return gear;
  }

  // findOne
  async findOneGear(attrs: Partial<Gear>) {
    const gear = await this.findOne(attrs);
    if (!gear) {
      throw new NotFoundException('Gear Not Found');
    }
    return gear;
  }

  // findWhere
  async findWhereLikeGear(attrs: Partial<Gear>) {
    const parseAttrs: Partial<Gear> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const gears = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!gears) {
      throw new NotFoundException('Gear Not Found');
    }
    return gears;
  }

  // update
  async updateGear(id: number, attrs: Partial<Gear>) {
    const gear = await this.findOneGear({ id });
    Object.assign(gear, attrs);
    await this.save(gear);
    return gear;
  }

  // softDelete
  async softDeleteGear(id: number) {
    const gear = await this.findOneGear({ id });
    await this.softRemove(gear);
    return gear;
  }
}
