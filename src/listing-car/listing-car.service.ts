import { Injectable } from '@nestjs/common';
import { AdditionService } from 'src/addition/addition.service';
import { CarBodyEvaluationService } from 'src/car-body-evaluation/car-body-evaluation.service';
import { CarBodyImageService } from 'src/car-body-image/car-body-image.service';
import { CarBodyNumberService } from 'src/car-body-number/car-body-number.service';
import { ListingCar } from 'src/entity/listing.car.entity';
import { ExhibitorEntryService } from 'src/exhibitor-entry/exhibitor-entry.service';
import { InspectionService } from 'src/inspection/inspection.service';
import { PaperClassService } from 'src/paper-class/paper-class.service';
import { SalesPointService } from 'src/sales-point/sales-point.service';
import { SuggestedListingService } from 'src/suggested-listing/suggested-listing.service';
import { TestingRecordService } from 'src/testing-record/testing-record.service';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';
import { UpdateListingCarDTO } from './dto/update.listing-car.dto';
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
    private readonly suggestedListingService: SuggestedListingService,
    private readonly paperClassService: PaperClassService,
    private readonly exhibitorEntryService: ExhibitorEntryService,
    private readonly carBodyNumberService: CarBodyNumberService,
  ) {}

  async create(
    createListingCarDTO: CreateListingCarDTO,
    carBodyNumberID: number,
  ) {
    const {
      CarBodyImage,
      salesPoint,
      Addition,
      CarBodyEvaluation,
      Inspection,
      TestingRecord,
      SuggestedListing,
      PaperClass,
      ExhibitorEntry,
      ...listingCarObject
    } = createListingCarDTO;
    const carBodyNumber = await this.carBodyNumberService.findOneID(
      carBodyNumberID,
    );

    const listingCar = (await this.listingCarRepository.createListingCar(
      listingCarObject,
      carBodyNumber,
    )) as ListingCar;
    await this.salesPointService.create(salesPoint, listingCar);
    await this.carBodyImageService.create(CarBodyImage, listingCar);
    await this.additionService.create(Addition, listingCar);
    await this.carBodyEvaluationService.create(CarBodyEvaluation, listingCar);
    await this.inspectionService.create(Inspection, listingCar);
    await this.testingRecordService.create(TestingRecord, listingCar);
    await this.suggestedListingService.create(SuggestedListing, listingCar);
    await this.paperClassService.create(PaperClass, listingCar);
    await this.exhibitorEntryService.create(ExhibitorEntry, listingCar);
    return await this.findOneId(listingCar.id);
  }

  async findAll() {
    return await this.listingCarRepository.find({
      relations: [
        'CarBodyImage',
        'salesPoint',
        'addition',
        'testingRecord',
        'exhibitorEntry',
        'paperClass',
        'carBodyNumber',
      ],
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

  async update(id: number, attrs: UpdateListingCarDTO) {
    const {
      CarBodyImage,
      salesPoint,
      Addition,
      CarBodyEvaluation,
      Inspection,
      TestingRecord,
      SuggestedListing,
      PaperClass,
      ExhibitorEntry,
      ...attrsListingCar
    } = attrs;
    console.log(CarBodyImage);
    const listingCar = await this.listingCarRepository.updateListingCar(
      id,
      attrsListingCar,
    );
    await this.carBodyImageService.update(id, CarBodyImage);
    // await this.salesPointService.update(id, salesPoint);
  }

  async delete(id: number) {
    return await this.listingCarRepository.softDeleteListingCar(id);
  }
}
