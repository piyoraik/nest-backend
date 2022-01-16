import { SalesPoint } from 'src/entity/sales.point.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(SalesPoint)
export class SalesPointRepository extends Repository<SalesPoint> {}
