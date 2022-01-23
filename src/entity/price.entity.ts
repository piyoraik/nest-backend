import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';
import { Members } from './members.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => AuctionListing, (auctionListing) => auctionListing.price)
  @JoinColumn()
  auctionListing: AuctionListing;

  @ManyToOne(() => Members, (member) => member.prices)
  member: Members;

  @Column()
  successfulBidPrice: number;

  @Column()
  successfulBidCommission: number;

  @Column()
  useCommission: number;

  @Column()
  consumptionTax: number;

  @Column()
  deliveryCommission: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
