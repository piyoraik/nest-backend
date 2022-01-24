import { NotFoundException } from '@nestjs/common';
import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateCarBodyImageDTO } from './dto/create.carbodyimage.dto';

@EntityRepository(CarBodyImage)
export class CarBodyImageRepository extends Repository<CarBodyImage> {
  async createCarBodyImage(
    createCarBodyImage: CreateCarBodyImageDTO,
    carBodyNumber: CarBodyNumber,
  ) {
    const carBodyImage = this.create({
      carBodyNumber,
      ...createCarBodyImage,
    });
    await this.save(carBodyImage);
    return carBodyImage;
  }

  async findOneCarBodyImage(attrs: Partial<CarBodyImage>) {
    const carBodyImage = await this.findOne(attrs);
    if (!carBodyImage) {
      throw new NotFoundException('CarBodyImage Not Found');
    }
    return carBodyImage;
  }

  async findWhereCarBodyImage(attrs: Partial<CarBodyImage>) {
    const carBodyImages = await this.find(attrs);
    if (!carBodyImages) {
      throw new NotFoundException('CarBodyImage Not Found');
    }
    return carBodyImages;
  }

  async updateCarBodyImage(id: number, attrs: Partial<CarBodyImage>) {
    const carBodyImage = await this.findOneCarBodyImage(attrs);
    Object.assign(carBodyImage, attrs);
    await this.save(carBodyImage);
    return carBodyImage;
  }

  async softDeleteCarBodyImage(id: number) {
    const carBodyImage = await this.findOneCarBodyImage({ id });
    await this.softRemove(carBodyImage);
    return carBodyImage;
  }
}
