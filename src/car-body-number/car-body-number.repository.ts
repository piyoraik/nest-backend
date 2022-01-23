import { NotFoundException } from '@nestjs/common';
import { UpdateCarBodyEvaluationDTO } from 'src/car-body-evaluation/dto/update-carbodyevaluation.dto';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import {
  CreateCarBodyNumberDTO,
  CreateCarBodyNumberForeignKeyDTO,
} from './dto/create.car-body-number.dto';
import { UpdateCarBodyNumberDTO } from './dto/update.car-body-number.dto';

@EntityRepository(CarBodyNumber)
export class CarBodyNumberRepository extends Repository<CarBodyNumber> {
  // Createの操作
  async createCarBodyNumber(
    createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    createCarBodyNumberForeignKey: CreateCarBodyNumberForeignKeyDTO,
    listingCarId: number,
  ) {
    const carBodyNumber = this.create({
      ...createCarBodyNumberDTO,
      ...createCarBodyNumberForeignKey,
      listingCarId,
    });
    await this.save(carBodyNumber);
    return carBodyNumber;
  }

  // findOne
  async findOneCarBodyNumber(attrs: Partial<CarBodyNumber>) {
    const carBodyNumber = await this.findOne({
      where: attrs,
      relations: [
        'listingCar',
        'maker',
        'carModel',
        'shift',
        'gear',
        'fuel',
        'airBack',
        'handle',
        'airConditoner',
        'shape',
        'importedCar',
        'exteriorColor',
        'interiorColor',
      ],
    });
    if (!carBodyNumber) {
      throw new NotFoundException('CarBodyNumber Not Found');
    }
    return carBodyNumber;
  }

  // findWhere
  async findWhereLikeCarBodyNumber(
    attrs: Partial<UpdateCarBodyNumberDTO | UpdateCarBodyEvaluationDTO>,
  ) {
    const parseAttrs: Partial<CarBodyNumber> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const carBodyNumbers = await this.find({
      where: parseAttrs,
      relations: [
        'listingCar',
        'maker',
        'carModel',
        'shift',
        'gear',
        'fuel',
        'airBack',
        'handle',
        'airConditoner',
        'shape',
        'importedCar',
        'exteriorColor',
        'interiorColor',
      ],
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
