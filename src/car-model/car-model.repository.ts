import { CarModel } from "src/entity/car.model.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(CarModel)
export class CarModelRepository extends Repository<CarModel> {}