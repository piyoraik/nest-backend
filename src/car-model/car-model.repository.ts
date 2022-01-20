import { NotFoundException } from '@nestjs/common';
import { CarModel } from 'src/entity/car.model.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateCarModelDTO } from './dto/create.car-model.dto';

@EntityRepository(CarModel)
export class CarModelRepository extends Repository<CarModel> {
  // Createの操作
  async createCarModel(createCarModelDTO: CreateCarModelDTO) {
    const carModel = this.create({
      ...createCarModelDTO,
    });
    await this.save(carModel);
    return carModel;
  }

  // findOne
  async findOneCarModel(attrs: Partial<CarModel>) {
    const carModel = await this.findOne(attrs);
    if (!carModel) {
      throw new NotFoundException('CarModel Not Found');
    }
    return carModel;
  }

  // findWhere
  async findWhereLikeCarModel(attrs: Partial<CarModel>) {
    const parseAttrs: Partial<CarModel> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const carModels = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!carModels) {
      throw new NotFoundException('CarModel Not Found');
    }
    return carModels;
  }

  // update
  async updateCarModel(id: number, attrs: Partial<CarModel>) {
    const carModel = await this.findOneCarModel({ id });
    Object.assign(carModel, attrs);
    await this.save(carModel);
    return carModel;
  }

  // softDelete
  async softDeleteCarModel(id: number) {
    const carModel = await this.findOneCarModel({ id });
    await this.softRemove(carModel);
    return carModel;
  }
}
