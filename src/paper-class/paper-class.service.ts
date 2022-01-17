import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { PaperClass } from 'src/entity/paper.class.entity';
import { CreatePaperClassDTO } from './dto/create.paperclass.dto';
import { PaperClassRepository } from './paper-class.repository';

@Injectable()
export class PaperClassService {
  constructor(private readonly paperClassRepository: PaperClassRepository) {}

  async create(
    createPaperClassDTO: CreatePaperClassDTO,
    listingCar: ListingCar,
  ) {
    return await this.paperClassRepository.createPaperClass(
      createPaperClassDTO,
      listingCar,
    );
  }

  async findOneId(id: number) {
    return await this.paperClassRepository.findOnePaperClass({ id });
  }

  async findOne(attrs: Partial<PaperClass>) {
    return await this.paperClassRepository.findOnePaperClass(attrs);
  }

  async find(attrs: Partial<PaperClass>) {
    return await this.paperClassRepository.findWherePaperClass(attrs);
  }

  async delete(id: number) {
    return await this.paperClassRepository.softDeletePaperClass(id);
  }
}
