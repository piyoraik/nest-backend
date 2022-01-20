import { Injectable } from '@nestjs/common';
import { Addition } from 'src/entity/addition.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { AdditionRepository } from './addition.repository';
import { CreateAdditionDTO } from './dto/create-addition.dto';

@Injectable()
export class AdditionService {
  constructor(private readonly additionRepository: AdditionRepository) {}

  async create(createAdditionDTO: CreateAdditionDTO, listingCar: ListingCar) {
    return await this.additionRepository.createAddition(
      createAdditionDTO,
      listingCar,
    );
  }

  async findOne(id: number) {
    return await this.additionRepository.findOneAddition({ id });
  }

  async find(attrs: Partial<Addition>) {
    return await this.additionRepository.findWhereAddition(attrs);
  }

  async update(id: number, attrs: Partial<Addition>) {
    return await this.additionRepository.updateAddition(id, attrs);
  }

  async delete(id: number) {
    return await this.additionRepository.softDeleteAddition(id);
  }
}
