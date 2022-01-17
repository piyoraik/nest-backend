import { NotFoundException } from '@nestjs/common';
import { ListingCar } from 'src/entity/listing.car.entity';
import { PaperClass } from 'src/entity/paper.class.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreatePaperClassDTO } from './dto/create.paperclass.dto';

@EntityRepository(PaperClass)
export class PaperClassRepository extends Repository<PaperClass> {
  async createPaperClass(
    createPaperClass: CreatePaperClassDTO,
    listingCar: ListingCar,
  ) {
    const paperClass = this.create({
      listingCar,
      ...createPaperClass,
    });
    await this.save(paperClass);
    return paperClass;
  }

  async findOnePaperClass(attrs: Partial<PaperClass>) {
    const paperClass = await this.findOne(attrs);
    if (!paperClass) {
      throw new NotFoundException('PaperClass Not Found');
    }
    return paperClass;
  }

  async findWherePaperClass(attrs: Partial<PaperClass>) {
    const paperClasses = await this.find(attrs);
    if (!paperClasses) {
      throw new NotFoundException('PaperClass Not Found');
    }
    return paperClasses;
  }

  async updatePaperClass(id: number, attrs: Partial<PaperClass>) {
    const paperClass = await this.findOnePaperClass(attrs);
    Object.assign(paperClass, attrs);
    await this.save(paperClass);
    return paperClass;
  }

  async softDeletePaperClass(id: number) {
    const paperClass = await this.findOnePaperClass({ id });
    await this.softRemove(paperClass);
    return paperClass;
  }
}
