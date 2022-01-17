import { ListingCar } from 'src/entity/listing.car.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateListingCarDTO } from './dto/create.listing-car.dto';

@EntityRepository(ListingCar)
export class ListingCarRepository extends Repository<ListingCar> {
  async createListingCar(createListingCarDTO: CreateListingCarDTO) {
    const listingCar = {
      ...createListingCarDTO,
    };
    await this.save(listingCar);
    return listingCar;
  }

  async findOneListingCar(attrs: Partial<ListingCar>) {
    return await this.findOne(attrs);
  }

  async findWhereListingCar(attrs: Partial<ListingCar>) {
    return await this.find(attrs);
  }

  async updateListingCar(id: number, attrs: Partial<ListingCar>) {
    const listingCar = await this.findOneListingCar({ id });
    Object.assign(listingCar, attrs);
    await this.save(listingCar);
    return listingCar;
  }

  async softDeleteListingCar(id: number) {
    const listingCar = await this.findOneListingCar({ id });
    await this.softDelete(listingCar);
    return listingCar;
  }
}
