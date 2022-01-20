import { Admin } from "src/entity/admin.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin>{}