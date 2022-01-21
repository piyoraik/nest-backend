import { Injectable } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { PaperClass } from 'src/entity/paper.class.entity';
import { CreatePaperClassDTO } from './dto/create.paperclass.dto';
import { PaperClassRepository } from './paper-class.repository';

@Injectable()
// paperClass.service.ts
export class PaperClassService {
  constructor(private paperClassRepository: PaperClassRepository) {}

  // create
  async create(
    createPaperClassDTO: CreatePaperClassDTO,
    listingCar: ListingCar,
  ) {
    return await this.paperClassRepository.createPaperClass(
      createPaperClassDTO,
      listingCar,
    );
  }

  // findAll
  async findAll() {
    return await this.paperClassRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.paperClassRepository.findOnePaperClass({ id });
  }

  // findOne
  async findOne(attrs: Partial<PaperClass>) {
    return await this.paperClassRepository.findOnePaperClass(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<PaperClass>) {
    return await this.paperClassRepository.findWherePaperClass(attrs);
  }

  // update
  async update(id: number, attrs: Partial<PaperClass>) {
    return await this.paperClassRepository.updatePaperClass(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.paperClassRepository.softDeletePaperClass(id);
  }
}
