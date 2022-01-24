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
import { Price } from './price.entity';
import { Purchase } from './purchase.entity';

@Entity()
export class Members {
  //会員

  @PrimaryGeneratedColumn({ comment: '会員ID' })
  id: number;

  //名前
  @Column({ comment: '会員名' })
  name: string;

  //企業名
  @Column({ comment: '企業名' })
  companyName: string;

  //メールアドレス
  @Column({ unique: true, comment: 'メールアドレス' })
  email: string;

  //パスワード
  @Column({ comment: 'パスワード' })
  password: string;

  //電話番号
  @Column({ comment: '電話番号' })
  phoneNumber: string;

  //アイコン画像
  @Column({ comment: 'アイコン画像' })
  iconImage: string;

  //住所
  @Column({ comment: '住所' })
  address: string;

  //悪質フラグ
  @Column({ default: false, comment: '悪質フラグ' })
  malicuousFlag: boolean;

  //与信チェック
  @Column({ default: false, comment: '与信チェック' })
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

  @OneToMany(() => Price, (price) => price.member)
  prices: Price[];

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
