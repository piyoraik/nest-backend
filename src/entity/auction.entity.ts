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

  @PrimaryGeneratedColumn({ comment: 'オークションID' })
  id: number;

  //オークション名
  @Column({ comment: 'オークション名' })
  auctionName: string;

  //色
  @Column({ comment: '色' })
  auctionColor: AuctionColor;

  //サブタイトル
  @Column({ comment: 'サブタイトル' })
  subTitle: string;

  //開始時間
  @Column({ comment: '開始時間' })
  startTime: Date;

  //セレクション画像
  @Column({ comment: 'セレクション画像' })
  selectionImg: string;

  //オークションID
  @OneToMany(() => AuctionListing, (auctionListing) => auctionListing.auction)
  auctionListing: AuctionListing[];

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
