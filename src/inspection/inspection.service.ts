import { Injectable } from '@nestjs/common';
import { Inspection } from 'src/entity/inspection.entity';
import { ListingCar } from 'src/entity/listing.car.entity';
import { CreateInspectionDTO } from './dto/create-inspection.dto';
import { InspectionRepository } from './inspection.repository';

@Injectable()
export class InspectionService {
  constructor(private readonly inspectionRepository: InspectionRepository) {}

  async create(
    createInspectionDTO: CreateInspectionDTO,
    listingCar: ListingCar,
  ) {
    return await this.inspectionRepository.createInspection(
      createInspectionDTO,
      listingCar,
    );
  }

  async findOne(id: number) {
    return await this.inspectionRepository.findOneInspection({ id });
  }

  async find(attrs: Partial<Inspection>) {
    return await this.inspectionRepository.findWhereInspection(attrs);
  }

  async update(id: number, attrs: Partial<Inspection>) {
    return await this.inspectionRepository.updateInspection(id, attrs);
  }

  async delete(id: number) {
    return await this.inspectionRepository.softDeleteInspection(id);
  }
}
