import { Injectable } from '@nestjs/common';
import { AirBackService } from 'src/air-back/air-back.service';
import { CreateAirBackDTO } from 'src/air-back/dto/create.air-back.dto';
import { AirConditionerService } from 'src/air-conditioner/air-conditioner.service';
import { CarModelService } from 'src/car-model/car-model.service';
import { CreateCarModelDTO } from 'src/car-model/dto/create.car-model.dto';
import { ColorService } from 'src/color/color.service';
import { AirBack } from 'src/entity/air.back.entity';
import { AirConditioner } from 'src/entity/air.conditioner.entity';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { Handle } from 'src/entity/handle.entity';
import { ImportedCar } from 'src/entity/imported.car.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { Shape } from 'src/entity/shape.entity';
import { CreateFuelDTO } from 'src/fuel/dto/create.fuel.dto';
import { FuelService } from 'src/fuel/fuel.service';
import { CreateGearDTO } from 'src/gear/dto/create.gear.dto';
import { GearService } from 'src/gear/gear.service';
import { CreateHandleDTO } from 'src/handle/dto/create.handle.dto';
import { HandleService } from 'src/handle/handle.service';
import { ImportedCarService } from 'src/imported-car/imported-car.service';
import { CreateMakerDTO } from 'src/maker/dto/create.maker.dto';
import { MakerService } from 'src/maker/maker.service';
import { ShapeService } from 'src/shape/shape.service';
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
    private readonly fuelService: FuelService,
    private readonly airBackService: AirBackService,
    private readonly shapeService: ShapeService,
    private readonly handleService: HandleService,
    private readonly importedCarService: ImportedCarService,
    private readonly airConditionerService: AirConditionerService,
    private readonly colorService: ColorService,
  ) {}

  // create
  async create(
    createCarBodyNumberDTO: CreateCarBodyNumberDTO,
    listingCar: ListingCar,
    attrsAirBack: CreateAirBackDTO,
    attrsShift: CreateShiftDTO,
    attrsFuel: CreateFuelDTO,
    attrsImportedCar: ImportedCar,
    attrsMaker: CreateMakerDTO,
    attrsShape: Shape,
    attrsHandle: CreateHandleDTO,
    attrsCarModel: CreateCarModelDTO,
    attrsGear: CreateGearDTO,
    attrsAirConditioner: AirConditioner,
    attrsInteriorColor: string,
    attrsExteriorColor: string,
  ) {
    const maker = await this.makerService.create(attrsMaker);
    const carModel = await this.carModelService.create(attrsCarModel);
    const shift = await this.shiftService.create(attrsShift);
    const gear = await this.gearService.create(attrsGear);
    const fuel = await this.fuelService.create(attrsFuel);
    const airBack = await this.airBackService.create(attrsAirBack);
    const shape = await this.shapeService.create(attrsShape);
    const handle = await this.handleService.create(attrsHandle);
    const importedCar = await this.importedCarService.create(attrsImportedCar);
    const airConditioner = await this.airConditionerService.create(
      attrsAirConditioner,
    );
    const interiorColor = await this.colorService.create({
      name: attrsInteriorColor,
    });
    const exteriorColor = await this.colorService.create({
      name: attrsExteriorColor,
    });

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
      interiorColor.id,
      exteriorColor.id,
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
