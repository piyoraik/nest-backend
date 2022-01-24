import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ListingCar } from './listing.car.entity';

@Entity()
export class CarBodyImage {
  //車体画像

  @PrimaryGeneratedColumn({ comment: '車体画像ID' })
  id: number;

  @Column({ comment: '車体画像' })
  img: string;

  @ManyToOne(() => ListingCar, (listingCar) => listingCar.CarBodyImage)
  listingCar: ListingCar;
}
