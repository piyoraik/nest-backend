import { Maker } from "src/entity/maker.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Maker)
export class MakerRepository extends Repository<Maker> {}