import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { ListingCar } from './listing.car.entity';

@Entity()
export class SalesPoint {
  //セールスポイント

  @PrimaryGeneratedColumn({ comment: 'セールスポイントID' })
  id: number;

  @Column({ comment: 'セールスポイント' })
  point: string; //セールスポイント

  @ManyToOne(() => ListingCar, (listingCar) => listingCar.salesPoint)
  listingCar: ListingCar;

  @Column({ comment: '出品車' })
  listingCarId: number;
}
