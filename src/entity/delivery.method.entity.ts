import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { AfterSuccessfulBid } from './after.successful.bid.entity';

@Entity()
export class DeliveryMethod {
  //配達方法

  @PrimaryGeneratedColumn()
  id: number;

  //運送方法
  @Column()
  transport: string;

  //費用
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
