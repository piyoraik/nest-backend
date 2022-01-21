import { NotFoundException } from '@nestjs/common';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateCarBodyNumberDTO } from './dto/create.car-body-number.dto';

@EntityRepository(CarBodyNumber)
export class CarBodyNumberRepository extends Repository<CarBodyNumber> {
  // Createの操作
  async createCarBodyNumber(createCarBodyNumberDTO: CreateCarBodyNumberDTO) {
    const carBodyNumber = this.create({
      ...createCarBodyNumberDTO,
    });
    await this.save(carBodyNumber);
    return carBodyNumber;
  }

  // findOne
  async findOneCarBodyNumber(attrs: Partial<CarBodyNumber>) {
    const carBodyNumber = await this.findOne(attrs);
    if (!carBodyNumber) {
      throw new NotFoundException('CarBodyNumber Not Found');
    }
    return carBodyNumber;
  }

  // findWhere
  async findWhereLikeCarBodyNumber(attrs: Partial<CarBodyNumber>) {
    const parseAttrs: Partial<CarBodyNumber> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const carBodyNumbers = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!carBodyNumbers) {
      throw new NotFoundException('CarBodyNumber Not Found');
    }
    return carBodyNumbers;
  }

  // update
  async updateCarBodyNumber(id: number, attrs: Partial<CarBodyNumber>) {
    const carBodyNumber = await this.findOneCarBodyNumber({ id });
    Object.assign(carBodyNumber, attrs);
    await this.save(carBodyNumber);
    return carBodyNumber;
  }

  // softDelete
  async softDeleteCarBodyNumber(id: number) {
    const carBodyNumber = await this.findOneCarBodyNumber({ id });
    await this.softRemove(carBodyNumber);
    return carBodyNumber;
  }
}
