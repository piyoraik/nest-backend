import { Purchase } from "src/entity/purchase.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(Purchase)
export class PurchaseRepository extends Repository<Purchase> {}