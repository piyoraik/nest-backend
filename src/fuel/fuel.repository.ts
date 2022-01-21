import { NotFoundException } from '@nestjs/common';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { Fuel } from 'src/entity/fuel.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateFuelDTO } from './dto/create.fuel.dto';

@EntityRepository(Fuel)
export class FuelRepository extends Repository<Fuel> {
  // Createの操作
  async createFuel(createFuelDTO: CreateFuelDTO) {
    const fuel = this.create({
      ...createFuelDTO,
    });
    await this.save(fuel);
    return fuel;
  }

  // findOne
  async findOneFuel(attrs: Partial<Fuel>) {
    const fuel = await this.findOne(attrs);
    if (!fuel) {
      throw new NotFoundException('Fuel Not Found');
    }
    return fuel;
  }

  // findWhere
  async findWhereLikeFuel(attrs: Partial<Fuel>) {
    const parseAttrs: Partial<Fuel> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const fuels = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!fuels) {
      throw new NotFoundException('Fuel Not Found');
    }
    return fuels;
  }

  // update
  async updateFuel(id: number, attrs: Partial<Fuel>) {
    const fuel = await this.findOneFuel({ id });
    Object.assign(fuel, attrs);
    await this.save(fuel);
    return fuel;
  }

  // softDelete
  async softDeleteFuel(id: number) {
    const fuel = await this.findOneFuel({ id });
    await this.softRemove(fuel);
    return fuel;
  }
}
