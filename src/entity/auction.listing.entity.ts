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

  @PrimaryGeneratedColumn({ comment: 'オークション出品車ID' })
  id: number;

  @OneToMany(
    () => AuctionSituation,
    (auctionSituation) => auctionSituation.auctionListing,
  )
  auctionSituation: AuctionSituation[];

  @OneToMany(() => Purchase, (purchase) => purchase.auctionListing)
  purchase: Purchase[];

  @OneToOne(() => Price, (price) => price.auctionListing)
  price: Price;

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
  @Column({ comment: '落札価格' })
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

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
