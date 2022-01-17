import { PaperClass } from 'src/entity/paper.class.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(PaperClass)
export class PaperClassRepository extends Repository<PaperClass> {}
