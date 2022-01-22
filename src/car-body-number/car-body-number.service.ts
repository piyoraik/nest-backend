import { Injectable } from '@nestjs/common';
import { AirBackService } from 'src/air-back/air-back.service';
import { AirConditionerService } from 'src/air-conditioner/air-conditioner.service';
import { CarModelService } from 'src/car-model/car-model.service';
import { ColorService } from 'src/color/color.service';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { FuelService } from 'src/fuel/fuel.service';
import { GearService } from 'src/gear/gear.service';
import { HandleService } from 'src/handle/handle.service';
import { ImportedCarService } from 'src/imported-car/imported-car.service';
import { ListingCarService } from 'src/listing-car/listing-car.service';
import { CreateMakerDTO } from 'src/maker/dto/create.maker.dto';
import { MakerService } from 'src/maker/maker.service';
import { ShapeService } from 'src/shape/shape.service';
import { ShiftService } from 'src/shift/shift.service';
import { CarBodyNumberRepository } from './car-body-number.repository';
import { CreateCarBodyNumberDTO } from './dto/create.car-body-number.dto';

@Injectable()
// carBodyNumber.service.ts
export class CarBodyNumberService {
  constructor(
    private readonly carBodyNumberRepository: CarBodyNumberRepository,
    private readonly listingCarService: ListingCarService,
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
  async create(createCarBodyNumberDTO: CreateCarBodyNumberDTO) {
    return await this.carBodyNumberRepository.createCarBodyNumber(
      createCarBodyNumberDTO,
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
