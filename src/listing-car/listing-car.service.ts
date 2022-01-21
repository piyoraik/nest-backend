import { Injectable } from '@nestjs/common';
import { AdditionService } from 'src/addition/addition.service';
import { CarBodyEvaluationService } from 'src/car-body-evaluation/car-body-evaluation.service';
import { CarBodyImageService } from 'src/car-body-image/car-body-image.service';
import { ListingCar } from 'src/entity/listing.car.entity';
import { InspectionService } from 'src/inspection/inspection.service';
import { SalesPointService } from 'src/sales-point/sales-point.service';
import { TestingRecordService } from 'src/testing-record/testing-record.service';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';
import { ListingCarRepository } from './listing-car.repository';

@Injectable()
export class ListingCarService {
  constructor(
    private readonly listingCarRepository: ListingCarRepository,
    private readonly salesPointService: SalesPointService,
    private readonly carBodyImageService: CarBodyImageService,
    private readonly additionService: AdditionService,
    private readonly carBodyEvaluationService: CarBodyEvaluationService,
    private readonly inspectionService: InspectionService,
    private readonly testingRecordService: TestingRecordService,
  ) {}

  async create(createListingCarDTO: CreateListingCarDTO) {
    const {
      CarBodyImage,
      salesPoint,
      Addition,
      CarBodyEvaluation,
      Inspection,
      TestingRecord,
      ...listingCarObject
    } = createListingCarDTO;
    const listingCar = (await this.listingCarRepository.createListingCar(
      listingCarObject,
    )) as ListingCar;
    await this.salesPointService.create(salesPoint, listingCar);
    await this.carBodyImageService.create(CarBodyImage, listingCar);
    await this.additionService.create(Addition, listingCar);
    await this.carBodyEvaluationService.create(CarBodyEvaluation, listingCar);
    await this.inspectionService.create(Inspection, listingCar);
    await this.testingRecordService.create(TestingRecord, listingCar);
    return createListingCarDTO;
  }

  async findAll() {
    return await this.listingCarRepository.find({
      relations: ['CarBodyImage', 'salesPoint'],
    });
  }

  async findOneId(id: number) {
    return await this.listingCarRepository.findOneListingCar({ id });
  }

  async findOne(attrs: Partial<ListingCar>) {
    return await this.listingCarRepository.findOneListingCar(attrs);
  }

  async findWhere(attrs: Partial<ListingCar>) {
    return await this.listingCarRepository.findWhereListingCar(attrs);
  }

  async update(id: number, attrs: Partial<ListingCar>) {
    return await this.listingCarRepository.updateListingCar(id, attrs);
  }

  async delete(id: number) {
    return await this.listingCarRepository.softDeleteListingCar(id);
  }
}
