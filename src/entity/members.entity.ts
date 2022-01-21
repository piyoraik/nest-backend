import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
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
  @Column({ unique: true })
  name: string;

  //企業名
  @Column({ unique: true })
  companyName: string;

  //メールアドレス
  @Column({ unique: true })
  email: string;

  //パスワード
  @Column({ unique: true })
  password: string;

  //電話番号
  @Column({ unique: true })
  phoneNumber: string;

  //アイコン画像
  @Column({ unique: true })
  iconImage: string;

  //住所
  @Column({ unique: true })
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
