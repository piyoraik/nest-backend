import { Injectable } from '@nestjs/common';
import { CarModelService } from 'src/car-model/car-model.service';
import { CreateCarModelDTO } from 'src/car-model/dto/create.car-model.dto';
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
import { CreateGearDTO } from 'src/gear/dto/create.gear.dto';
import { GearService } from 'src/gear/gear.service';
import { CreateMakerDTO } from 'src/maker/dto/create.maker.dto';
import { MakerService } from 'src/maker/maker.service';
import { CreateShiftDTO } from 'src/shift/dto/create.shift.dto';
import { ShiftService } from 'src/shift/shift.service';
import { CarBodyNumberRepository } from './car-body-number.repository';
import { CreateCarBodyNumberDTO } from './dto/create.car-body-number.dto';

@Injectable()
// carBodyNumber.service.ts
export class CarBodyNumberService {
  constructor(
    private readonly carBodyNumberRepository: CarBodyNumberRepository,
    private readonly makerService: MakerService,
    private readonly carModelService: CarModelService,
    private readonly shiftService: ShiftService,
    private readonly gearService: GearService,
  ) {}

  // create
  async create(
    createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    listingCar: ListingCar,
    airBack: AirBack,
    attrsShift: CreateShiftDTO,
    fuel: Fuel,
    importedCar: ImportedCar,
    attrsMaker: CreateMakerDTO,
    shape: Shape,
    handle: Handle,
    attrsCarModel: CreateCarModelDTO,
    attrsGear: CreateGearDTO,
    airConditioner: AirConditioner,
    interiorColorId: number,
    exteriorColorId: number,
  ) {
    const maker = await this.makerService.create(attrsMaker);
    const carModel = await this.carModelService.create(attrsCarModel);
    const shift = await this.shiftService.create(attrsShift);
    // const gear = await this.gearService.

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
