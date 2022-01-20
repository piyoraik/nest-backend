import { NotFoundException } from '@nestjs/common';
import { AirBack } from 'src/entity/air.back.entity';
import { AirConditioner } from 'src/entity/air.conditioner.entity';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { CarModel } from 'src/entity/car.model.entity';
import { Color } from 'src/entity/color.entity';
import { Fuel } from 'src/entity/fuel.entity';
import { Gear } from 'src/entity/gear.entity';
import { Handle } from 'src/entity/handle.entity';
import { ImportedCar } from 'src/entity/imported.car.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { Maker } from 'src/entity/maker.entity';
import { Shape } from 'src/entity/shape.entity';
import { Shift } from 'src/entity/shift.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateCarBodyNumberDTO } from './dto/create.car-body-number.dto';

@EntityRepository(CarBodyNumber)
export class CarBodyNumberRepository extends Repository<CarBodyNumber> {
  // Createの操作
  async createCarBodyNumber(
    createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    importedCar: ImportedCar,
    maker: Maker,
    shape: Shape,
    handle: Handle,
    carModel: CarModel,
    gear: Gear,
    airConditioner: AirConditioner,
    fuel: Fuel,
    shift: Shift,
    airBack: AirBack,
    listingCar: ListingCar,
    interiorColorId: number,
    exteriorColorId: number,
  ) {
    const carBodyNumber = this.create({
      ...createCarBodyNumberDTO,
      importedCar,
      maker,
      shape,
      handle,
      carModel,
      gear,
      // airConditioner, //こいつのせい
      fuel,
      shift,
      airBack,
      listingCar,
      interiorColorId,
      exteriorColorId,
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
