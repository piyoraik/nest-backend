import { NotFoundException } from '@nestjs/common';
import { ImportedCar } from 'src/entity/imported.car.entity';
import { EntityRepository, ILike, Repository } from 'typeorm';
import { CreateImportedCarDTO } from './dto/create.imported-car.dto';

@EntityRepository(ImportedCar)
export class ImportedCarRepository extends Repository<ImportedCar> {
  // Createの操作
  async createImportedCar(createImportedCarDTO: CreateImportedCarDTO) {
    const importedCar = this.create({
      ...createImportedCarDTO,
    });
    await this.save(importedCar);
    return importedCar;
  }

  // findOne
  async findOneImportedCar(attrs: Partial<ImportedCar>) {
    const importedCar = await this.findOne(attrs);
    if (!importedCar) {
      throw new NotFoundException('ImportedCar Not Found');
    }
    return importedCar;
  }

  // findWhere
  async findWhereLikeImportedCar(attrs: Partial<ImportedCar>) {
    const parseAttrs: Partial<ImportedCar> = {};
    for (const key in attrs) {
      parseAttrs[key] = ILike('%' + attrs[key] + '%');
    }
    const importedCars = await this.find({
      where: parseAttrs,
      relations: ['member'],
    });
    if (!importedCars) {
      throw new NotFoundException('ImportedCar Not Found');
    }
    return importedCars;
  }

  // update
  async updateImportedCar(id: number, attrs: Partial<ImportedCar>) {
    const importedCar = await this.findOneImportedCar({ id });
    Object.assign(importedCar, attrs);
    await this.save(importedCar);
    return importedCar;
  }

  // softDelete
  async softDeleteImportedCar(id: number) {
    const importedCar = await this.findOneImportedCar({ id });
    await this.softRemove(importedCar);
    return importedCar;
  }
}
