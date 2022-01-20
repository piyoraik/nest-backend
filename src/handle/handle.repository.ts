import { Handle } from "src/entity/handle.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Handle)
export class HandleRepository extends Repository<Handle> {}