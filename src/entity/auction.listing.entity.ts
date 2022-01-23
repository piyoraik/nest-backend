import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AfterSuccessfulBid } from './after.successful.bid.entity';
import { Auction } from './auction.entity';
import { Members } from './members.entity';
import { PurchaseManagement } from './purchase.management.entity';
import { CarBodyNumber } from './car.body.number.entity';
import { AuctionSituation } from './auction.situation.entity';
import { Purchase } from './purchase.entity';
import { Price } from './price.entity';

@Entity()
export class AuctionListing {
  //オークション出品車

  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(
    () => AuctionSituation,
    (auctionSituation) => auctionSituation.auctionListing,
  )
  auctionSituation: AuctionSituation[];

  @OneToMany(() => Purchase, (purchase) => purchase.auctionListing)
  purchase: Purchase[];

  @OneToMany(() => Price, (price) => price.auctionListing)
  price: Price[];

  //オークションID
  @ManyToOne(() => Auction, (auction) => auction.auctionListing)
  auction: Auction;

  //仕入れ管理ID
  @OneToMany(
    () => PurchaseManagement,
    (purchaseManagement) => purchaseManagement.auctionListing,
  )
  purchaseManagement: PurchaseManagement[];

  //落札価格
  @Column()
  hammerPrice: number;

  //会員ID
  @ManyToOne(() => Members, (members) => members.auctionListing)
  member: Members;

  //車体ID
  @ManyToOne(
    () => CarBodyNumber,
    (carBodyNumber) => carBodyNumber.auctionListing,
  )
  carBodyNumber: CarBodyNumber;

  @OneToOne(
    () => AfterSuccessfulBid,
    (afterSuccessfulBid) => afterSuccessfulBid.auctionListing,
  )
  @JoinColumn()
  afterSuccessfulBid: AfterSuccessfulBid;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
