import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { SalesPoint } from 'src/entity/sales.point.entity';
import { CreateSalesPointDTO } from './dto/create-salespoint.dto';
import { SalesPointRepository } from './sales-point.repository';

@Injectable()
// salesPoint.service.ts
export class SalesPointService {
  constructor(private salesPointRepository: SalesPointRepository) {}

  // create
  async create(
    createSalesPointDTO: CreateSalesPointDTO,
    listingCar: ListingCar,
  ) {
    return await this.salesPointRepository.createSalesPoint(
      createSalesPointDTO,
      listingCar,
    );
  }

  // findAll
  async findAll() {
    return await this.salesPointRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.salesPointRepository.findOneSalesPoint({ id });
  }

  // findOne
  async findOne(attrs: Partial<SalesPoint>) {
    return await this.salesPointRepository.findOneSalesPoint(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<SalesPoint>) {
    return await this.salesPointRepository.findWhereSalesPoint(attrs);
  }

  // update
  async update(id: number, attrs: Partial<SalesPoint>) {
    return await this.salesPointRepository.updateSalesPoint(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.salesPointRepository.softDeleteSalesPoint(id);
  }
}
