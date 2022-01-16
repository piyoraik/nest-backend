import { Inspection } from 'src/entity/inspection.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Inspection)
export class InspectionRepository extends Repository<Inspection> {}
