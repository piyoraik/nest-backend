import { ImportedCar } from "src/entity/imported.car.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ImportedCar)
export class ImportedCarRepository extends Repository<ImportedCar> {}