import { CarBodyImage } from 'src/entity/car.body.image.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(CarBodyImage)
export class CarBodyImageRepository extends Repository<CarBodyImage> {}
