import { NotFoundException } from '@nestjs/common';
import { CreateAuctionDto } from 'src/auction/dto/create-auction.dto';
import { Addition } from 'src/entity/addition.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Addition)
export class AdditionRepository extends Repository<Addition> {
  async createAddition(
    createAuctionDto: CreateAuctionDto,
    listingCar: ListingCar,
  ) {
    const addition = this.create({
      listingCar,
      ...createAuctionDto,
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
    const additions = await this.find(attrs);
    if (!additions) {
      throw new NotFoundException('Addition Not Found');
    }
    return additions;
  }

  async updateAddition(id: number, attrs: Partial<Addition>) {
    const addition = await this.findOneAddition(attrs);
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
