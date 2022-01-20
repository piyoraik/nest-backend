import { AirBack } from "src/entity/air.back.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(AirBack)
export class AirBackRepository extends Repository<AirBack> {}