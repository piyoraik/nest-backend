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
export class PaymentMethods {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  text: string;

  @OneToMany(
    () => AfterSuccessfulBid,
    (afterSuccessfulBid) => afterSuccessfulBid.paymentMethodId,
  )
  afterSuccessfulBid: AfterSuccessfulBid[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
