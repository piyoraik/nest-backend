import { NotFoundException } from '@nestjs/common';
import { Inspection } from 'src/entity/inspection.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateInspectionDTO } from './dto/create-inspection.dto';

@EntityRepository(Inspection)
export class InspectionRepository extends Repository<Inspection> {
  async createInspection(
    createInspectionDTO: CreateInspectionDTO,
    listingCar: ListingCar,
  ) {
    const inspection = this.create({
      listingCar,
      ...createInspectionDTO,
    });
    await this.save(inspection);
    return inspection;
  }

  async findOneInspection(attrs: Partial<Inspection>) {
    const inspection = await this.findOne(attrs);
    if (!inspection) {
      throw new NotFoundException('Inspection Not Found');
    }
    return inspection;
  }

  async findWhereInspection(attrs: Partial<Inspection>) {
    const inspections = await this.find(attrs);
    if (!inspections) {
      throw new NotFoundException('Inspection Not Found');
    }
    return inspections;
  }

  async updateInspection(id: number, attrs: Partial<Inspection>) {
    const inspection = await this.findOneInspection(attrs);
    Object.assign(inspection, attrs);
    await this.save(inspection);
    return inspection;
  }

  async softDeleteInspection(id: number) {
    const inspection = await this.findOneInspection({ id });
    await this.softRemove(inspection);
    return inspection;
  }
}
