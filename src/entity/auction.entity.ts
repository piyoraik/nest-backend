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
import { AuctionListing } from './auction.listing.entity';
import { AuctionColor } from './auction.color.entity';
import { Members } from './member.entity';

@Entity()
export class Auction {
  //オークション

  @PrimaryGeneratedColumn()
  id: number;

  //オークション名
  @Column()
  auctionName: string;

  //色
  @ManyToOne(() => AuctionColor, (auctionColor) => auctionColor.auction)
  auctionColorId: number;

  //サブタイトル
  @Column()
  subTitle: string;

  //開始時間
  @Column()
  startTime: Date;

  //セレクション画像
  @Column()
  selectionImg: string;

  //オークションID
  @OneToMany(() => AuctionListing, (auctionListing) => auctionListing.auctionId)
  auctionListing: AuctionListing[];

  @ManyToOne(() => Members, (member) => member.auctions)
  member: Members;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
