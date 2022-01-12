import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AfterSuccessfulBid } from './after.successful.bid.entity';
import { Auction } from './auction.entity';
import { Members } from './member.entity';
import { PurchaseManagement } from './purchase.management.entity';

@Entity()
export class AuctionListing {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Auction, (auction) => auction.auctionListing)
  auctionId: number;

  @ManyToOne(
    () => PurchaseManagement,
    (purchaseManagement) => purchaseManagement.auctionListing,
  )
  purchaseManagementId: number;

  @Column()
  hammerPrice: number;

  @ManyToOne(() => Members, (members) => members.auctionListing)
  membersId: number;

  @OneToMany(
    () => AfterSuccessfulBid,
    (afterSuccessfulBid) => afterSuccessfulBid.auctionListingId,
  )
  afterSuccessfulBid: AfterSuccessfulBid[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
