import { NotFoundException } from '@nestjs/common';
import { AirBack } from 'src/entity/air.back.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAirBackDTO } from './dto/create.air-back.dto';

@EntityRepository(AirBack)
export class AirBackRepository extends Repository<AirBack> {
  // Createの操作
  async createAirBack(createAirBackDTO: CreateAirBackDTO) {
    const airBack = this.create({
      ...createAirBackDTO,
    });
    await this.save(airBack);
    return airBack;
  }

  // findOne
  async findOneAirBack(attrs: Partial<AirBack>) {
    const airBack = await this.findOne(attrs);
    if (!airBack) {
      throw new NotFoundException('AirBack Not Found');
    }
    return airBack;
  }

  // findWhere
  async findWhereLikeAirBack(attrs: Partial<AirBack>) {
    const parseAttrs: Partial<AirBack> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const airBacks = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!airBacks) {
      throw new NotFoundException('AirBack Not Found');
    }
    return airBacks;
  }

  // update
  async updateAirBack(id: number, attrs: Partial<AirBack>) {
    const airBack = await this.findOneAirBack({ id });
    Object.assign(airBack, attrs);
    await this.save(airBack);
    return airBack;
  }

  // softDelete
  async softDeleteAirBack(id: number) {
    const airBack = await this.findOneAirBack({ id });
    await this.softRemove(airBack);
    return airBack;
  }
}
