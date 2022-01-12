import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AfterSuccessfulBid } from './after.successful.bid.entity';

@Entity()
export class DeliveryMethod {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  transport: string;

  @Column()
  cost: number;

  @OneToMany(
    () => AfterSuccessfulBid,
    (afterSuccessfulBid) => afterSuccessfulBid.deliveryId,
  )
  afterSuccessfulBid: AfterSuccessfulBid[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
