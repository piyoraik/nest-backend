import { Injectable } from '@nestjs/common';
import { ImportedCar } from 'src/entity/imported.car.entity';
import { CreateImportedCarDTO } from './dto/create.imported-car.dto';
import { ImportedCarRepository } from './imported-car.repository';

@Injectable()
// importedCar.service.ts
export class ImportedCarService {
  constructor(private importedCarRepository: ImportedCarRepository) {}

  // create
  async create(createImportedCarDTO: CreateImportedCarDTO) {
    const res = await this.importedCarRepository.createImportedCar(
      createImportedCarDTO,
    );
    return await this.findOneID(res.id);
  }

  // findAll
  async findAll() {
    return await this.importedCarRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.importedCarRepository.findOneImportedCar({ id });
  }

  // findOne
  async findOne(attrs: Partial<ImportedCar>) {
    return await this.importedCarRepository.findOneImportedCar(attrs);
  }

  // findWhere
  async findWhere(attrs: Partial<ImportedCar>) {
    return await this.importedCarRepository.findWhereLikeImportedCar(attrs);
  }

  // update
  async update(id: number, attrs: Partial<ImportedCar>) {
    return await this.importedCarRepository.updateImportedCar(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.importedCarRepository.softDeleteImportedCar(id);
  }
}
