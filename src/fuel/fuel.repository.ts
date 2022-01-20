import { Fuel } from "src/entity/fuel.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Fuel)
export class FuelRepository extends Repository<Fuel> {}