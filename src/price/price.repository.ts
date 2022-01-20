import { Price } from 'src/entity/price.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Price)
export class PriceRepository extends Repository<Price> {}
