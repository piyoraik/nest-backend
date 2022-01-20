import { Shape } from "src/entity/shape.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Shape)
export class ShapeRepository extends Repository<Shape> {}