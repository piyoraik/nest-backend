import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { ListingCarService } from 'src/listing-car/listing-car.service';
import { CreateSalesPointDTO } from './dto/create-salespoint.dto';
import { SalesPointRepository } from './sales-point.repository';

@Injectable()
export class SalesPointService {
  constructor(private readonly salesPointRepository: SalesPointRepository) {}

  async fetchAll() {
    return await this.salesPointRepository.find();
  }

  async create(
    createSalesPointDTO: CreateSalesPointDTO[],
    listingCar: ListingCar,
  ) {
    const res = await Promise.all(
      createSalesPointDTO.map(async (salesPoint) => {
        return this.salesPointRepository.createSalesPoint(
          salesPoint,
          listingCar,
        );
      }),
    );
    return res;
  }

  async findOne(id: number) {
    return await this.salesPointRepository.findOneSalesPoint({ id });
  }

  async find(attrs: Partial<ListingCar>) {
    return await this.salesPointRepository.findWhereSalesPoint(attrs);
  }

  async update(id: number, attrs: Partial<ListingCar>) {
    return await this.salesPointRepository.updateSalesPoint(id, attrs);
  }

  async delete(id: number) {
    return await this.salesPointRepository.softDeleteSalesPoint(id);
  }
}
