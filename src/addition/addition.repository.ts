import { NotFoundException } from '@nestjs/common';
import { Addition } from 'src/entity/addition.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateAdditionDTO } from './dto/create-addition.dto';

@EntityRepository(Addition)
export class AdditionRepository extends Repository<Addition> {
  async createAddition(
    createAddition: CreateAdditionDTO,
    listingCar: ListingCar,
  ) {
    const addition = this.create({
      listingCar,
      ...createAddition,
    });
    await this.save(addition);
    return addition;
  }

  async findOneAddition(attrs: Partial<Addition>) {
    const addition = await this.findOne(attrs);
    if (!addition) {
      throw new NotFoundException('Addition Not Found');
    }
    return addition;
  }

  async findWhereAddition(attrs: Partial<Addition>) {
    const parseAttrs: Partial<Addition> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const additions = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!additions) {
      throw new NotFoundException('Addition Not Found');
    }
    return additions;
  }

  async updateAddition(id: number, attrs: Partial<Addition>) {
    const addition = await this.findOneAddition({ id });
    Object.assign(addition, attrs);
    await this.save(addition);
    return addition;
  }

  async softDeleteAddition(id: number) {
    const addition = await this.findOneAddition({ id });
    await this.softRemove(addition);
    return addition;
  }
}
