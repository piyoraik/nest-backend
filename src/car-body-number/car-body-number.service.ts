import { Injectable } from '@nestjs/common';
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
import { CarBodyNumberRepository } from './car-body-number.repository';
import { CreateCarBodyNumberDTO } from './dto/create.car-body-number.dto';

@Injectable()
// carBodyNumber.service.ts
export class CarBodyNumberService {
  constructor(private carBodyNumberRepository: CarBodyNumberRepository) {}

  // create
  async create(
    createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    listingCar: ListingCar,
    airBack: AirBack,
    shift: Shift,
    fuel: Fuel,
    importedCar: ImportedCar,
    maker: Maker,
    shape: Shape,
    handle: Handle,
    carModel: CarModel,
    gear: Gear,
    airConditioner: AirConditioner,
    interiorColorId: number,
    exteriorColorId: number,
  ) {
    return await this.carBodyNumberRepository.createCarBodyNumber(
      createCarBodyNumberDTO,
      importedCar,
      maker,
      shape,
      handle,
      carModel,
      gear,
      airConditioner,
      fuel,
      shift,
      airBack,
      listingCar,
      interiorColorId,
      exteriorColorId,
    );
  }

  // findAll
  async findAll() {
    return await this.carBodyNumberRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.carBodyNumberRepository.findOneCarBodyNumber({ id });
  }

  // findOne
  async findOne(attrs: Partial<CarBodyNumber>) {
    return await this.carBodyNumberRepository.findOneCarBodyNumber(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<CarBodyNumber>) {
    return await this.carBodyNumberRepository.findWhereLikeCarBodyNumber(attrs);
  }

  // update
  async update(id: number, attrs: Partial<CarBodyNumber>) {
    return await this.carBodyNumberRepository.updateCarBodyNumber(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.carBodyNumberRepository.softDeleteCarBodyNumber(id);
  }
}
