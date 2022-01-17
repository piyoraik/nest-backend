import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ListingCar } from './listing.car.entity';

@Entity()
export class SalesPoint {
  //セールスポイント

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  point: string; //セールスポイント

  @ManyToOne(() => ListingCar, (listingCar) => listingCar.salesPoint)
  listingCar: ListingCar;
}
