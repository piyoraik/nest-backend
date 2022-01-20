import { AirConditioner } from "src/entity/air.conditioner.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(AirConditioner)
export class AirConditionerRepository extends Repository<AirConditioner> {}