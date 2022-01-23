import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ListingCar } from './listing.car.entity';

@Entity()
export class PaperClass {
  //紙類

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  securityDocument: boolean; //新車保証書

  @Column()
  manual: boolean; //取扱説明書

  @OneToOne(() => ListingCar, (listingCar) => listingCar.paperClass)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
