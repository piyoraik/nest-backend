import { Injectable } from '@nestjs/common';
import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CarBodyImageRepository } from './car-body-image.repository';
import { CreateCarBodyImageDTO } from './dto/create.carbodyimage.dto';

@Injectable()
export class CarBodyImageService {
  constructor(
    private readonly carBodyImageRepository: CarBodyImageRepository,
  ) {}

  async findAll() {
    return await this.carBodyImageRepository.find();
  }

  async create(
    createCarBodyImageDTO: CreateCarBodyImageDTO[],
    listingCar: ListingCar,
  ) {
    const res = await Promise.all(
      createCarBodyImageDTO.map(async (image) => {
        return this.carBodyImageRepository.createCarBodyImage(
          image,
          listingCar,
        );
      }),
    );
    return res;
  }

  async findOne(id: number) {
    return await this.carBodyImageRepository.findOneCarBodyImage({ id });
  }

  async find(attrs: Partial<CarBodyImage>) {
    return await this.carBodyImageRepository.findWhereCarBodyImage(attrs);
  }

  async delete(id: number) {
    return await this.carBodyImageRepository.softDeleteCarBodyImage(id);
  }
}
