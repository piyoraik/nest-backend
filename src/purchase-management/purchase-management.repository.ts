import { PurchaseManagement } from "src/entity/purchase.management.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(PurchaseManagement)
export class PurchaseManagementRepository extends Repository<PurchaseManagement> {}