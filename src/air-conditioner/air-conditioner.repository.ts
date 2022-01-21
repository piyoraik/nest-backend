import { NotFoundException } from '@nestjs/common';
import { AirConditioner } from 'src/entity/air.conditioner.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAirConditionerDTO } from './dto/create.air-conditioner.dto';

@EntityRepository(AirConditioner)
export class AirConditionerRepository extends Repository<AirConditioner> {
  // Createの操作
  async createAirConditioner(createAirConditionerDTO: CreateAirConditionerDTO) {
    const airConditioner = this.create({
      ...createAirConditionerDTO,
    });
    await this.save(airConditioner);
    return airConditioner;
  }

  // findOne
  async findOneAirConditioner(attrs: Partial<AirConditioner>) {
    const airConditioner = await this.findOne(attrs);
    if (!airConditioner) {
      throw new NotFoundException('AirConditioner Not Found');
    }
    return airConditioner;
  }

  // findWhere
  async findWhereLikeAirConditioner(attrs: Partial<AirConditioner>) {
    const parseAttrs: Partial<AirConditioner> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const airConditioners = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!airConditioners) {
      throw new NotFoundException('AirConditioner Not Found');
    }
    return airConditioners;
  }

  // update
  async updateAirConditioner(id: number, attrs: Partial<AirConditioner>) {
    const airConditioner = await this.findOneAirConditioner({ id });
    Object.assign(airConditioner, attrs);
    await this.save(airConditioner);
    return airConditioner;
  }

  // softDelete
  async softDeleteAirConditioner(id: number) {
    const airConditioner = await this.findOneAirConditioner({ id });
    await this.softRemove(airConditioner);
    return airConditioner;
  }
}
