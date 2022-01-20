import { Shift } from "src/entity/shift.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Shift)
export class ShiftRepository extends Repository<Shift> {}