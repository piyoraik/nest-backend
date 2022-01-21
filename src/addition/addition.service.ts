import { Injectable } from '@nestjs/common';
import { Addition } from 'src/entity/addition.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { AdditionRepository } from './addition.repository';
import { CreateAdditionDTO } from './dto/create-addition.dto';

@Injectable()
// addition.service.ts
export class AdditionService {
  constructor(private additionRepository: AdditionRepository) {}

  // create
  async create(createAdditionDTO: CreateAdditionDTO, listingCar: ListingCar) {
    return await this.additionRepository.createAddition(
      createAdditionDTO,
      listingCar,
    );
  }

  // findAll
  async findAll() {
    return await this.additionRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.additionRepository.findOneAddition({ id });
  }

  // findOne
  async findOne(attrs: Partial<Addition>) {
    return await this.additionRepository.findOneAddition(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<Addition>) {
    return await this.additionRepository.findWhereAddition(attrs);
  }

  // update
  async update(id: number, attrs: Partial<Addition>) {
    return await this.additionRepository.updateAddition(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.additionRepository.softDeleteAddition(id);
  }
}
