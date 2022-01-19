import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Admin } from './admin.entity';
import { Members } from './member.entity';
import { PaymentMethod } from '../enum/paymentMethod.enum';
import { DeliveryMethod } from '../enum/deliveryMethod.enum';
import { AuctionListing } from './auction.listing.entity';

@Entity()
export class Purchase {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => AuctionListing, (auctionListing) => auctionListing.purchase)
  auctionListing: AuctionListing;

  @ManyToOne(() => Members, (member) => member.purchase)
  membersId: Members;

  @ManyToOne(() => Admin, (admin) => admin.purchase)
  adminId: Admin;

  @Column()
  option: boolean;

  @Column()
  sealCertificate: boolean;

  @Column()
  seal: boolean;

  @Column()
  residentsCard: boolean;

  @Column()
  vehicleInspection: boolean;

  @Column()
  LiabilityInsurance: boolean;

  @Column()
  commission: boolean;

  @Column()
  commissionReturn: boolean;

  @Column()
  garageCertificate: boolean;

  @Column()
  deliveryMethod: DeliveryMethod;

  @Column()
  paymentMethod: PaymentMethod;

  @Column()
  payment: boolean;

  @Column()
  delivery: boolean;

  @Column()
  cancel: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
