import { Injectable } from '@nestjs/common';
import { CarBodyImageService } from 'src/car-body-image/car-body-image.service';
import { ListingCar } from 'src/entity/listing.car.entity';
import { SalesPointService } from 'src/sales-point/sales-point.service';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';
import { ListingCarRepository } from './listing-car.repository';

@Injectable()
export class ListingCarService {
  constructor(
    private readonly listingCarRepository: ListingCarRepository,
    private readonly salesPointService: SalesPointService,
    private readonly carBodyImageService: CarBodyImageService,
  ) {}

  // memo
  // どうするか考える
  // ここで必要なDTOを呼び込んでがっちゃんこするとか
  async create(createListingCarDTO: CreateListingCarDTO) {
    const listingCar = await this.listingCarRepository.createListingCar(
      createListingCarDTO,
    );
  }

  async findAll() {
    return await this.listingCarRepository.find();
  }

  async findOneId(id: number) {
    return await this.listingCarRepository.findOneListingCar({ id });
  }

  async find(attrs: Partial<ListingCar>) {
    return await this.listingCarRepository.findOneListingCar(attrs);
  }

  async update(id: number, attrs: Partial<ListingCar>) {
    return await this.listingCarRepository.updateListingCar(id, attrs);
  }

  async delete(id: number) {
    return await this.listingCarRepository.softDeleteListingCar(id);
  }
}
