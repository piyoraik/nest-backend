import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(ListingCar)
export class ListingCarRepository extends Repository<ListingCar> {}
