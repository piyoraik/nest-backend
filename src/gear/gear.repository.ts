import { Gear } from "src/entity/gear.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Gear)
export class GearRepository extends Repository<Gear> {}