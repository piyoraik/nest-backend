import { CarBodyNumber } from "src/entity/car.body.number.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CarBodyNumber)
export class CarBodyNumberRepository extends Repository<CarBodyNumber> {}