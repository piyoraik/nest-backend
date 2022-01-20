import { ExhibitorEntry } from "src/entity/exhibitor.entry.entity";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ExhibitorEntry)
export class ExhibitorEntryRepository extends Repository<ExhibitorEntry> {}