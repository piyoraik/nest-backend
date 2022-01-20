import { Color } from "src/entity/color.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Color)
export class ColorRepository extends Repository<Color> {}