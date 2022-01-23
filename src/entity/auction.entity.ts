import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';
import { AuctionColor } from '../enum/auctionColor.enum';

@Entity()
export class Auction {
  //オークション

  @PrimaryGeneratedColumn()
  id: number;

  //オークション名
  @Column()
  auctionName: string;

  //色 ＊変更
  @Column()
  auctionColor: AuctionColor;

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
  @OneToMany(() => AuctionListing, (auctionListing) => auctionListing.auction)
  auctionListing: AuctionListing[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
