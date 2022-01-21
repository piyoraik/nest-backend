import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { Auction } from './auction.entity';
import { AuctionListing } from './auction.listing.entity';
import { AuctionSituation } from './auction.situation.entity';
import { Purchase } from './purchase.entity';

@Entity()
export class Members {
  //会員

  @PrimaryGeneratedColumn()
  id: number;

  //名前
  @Column()
  name: string;

  //企業名
  @Column()
  companyName: string;

  //メールアドレス
  @Column()
  email: string;

  //パスワード
  @Column()
  password: string;

  //電話番号
  @Column()
  phoneNumber: string;

  //アイコン画像
  @Column()
  iconImage: string;

  //住所
  @Column()
  address: string;

  //悪質フラグ
  @Column({ default: false })
  malicuousFlag: boolean;

  //与信チェック
  @Column({ default: false })
  creditCheck: boolean;

  @OneToMany(() => AuctionListing, (auctionListing) => auctionListing.member)
  auctionListing: AuctionListing[];

  @OneToMany(
    () => AuctionSituation,
    (auctionSituation) => auctionSituation.member,
  )
  auctionSituation: AuctionSituation[];

  @OneToMany(() => Purchase, (purchase) => purchase.member)
  purchase: Purchase[];

  @OneToMany(() => Auction, (auction) => auction.member)
  auctions: Auction[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
