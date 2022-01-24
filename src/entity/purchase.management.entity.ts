import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';

@Entity()
export class PurchaseManagement {
  //仕入れ管理
  @PrimaryGeneratedColumn({ comment: '仕入れ管理ID' })
  id: number;

  //仕入れ日
  @Column({ comment: '仕入れ日' })
  purchaseData: Date;

  //仕入れ先
  @Column({ comment: '仕入れ先' })
  supplier: string;

  //仕入金額
  @Column({ comment: '仕入金額' })
  purchaseAmount: number;

  //経費
  @Column({ comment: '経費' })
  expense: number;

  //名変期限
  @Column({ comment: '名変期限' })
  nameStrangePeriod: Date;

  //備考
  @Column({ comment: '備考' })
  note: string;

  //仕入原価
  @Column({ comment: '仕入原価' })
  purchasingCost: number;

  //消費税
  @Column({ comment: '消費税' })
  tax: number;

  //売上日
  @Column({ comment: '売上日' })
  salesDate: Date;

  //売上先
  @Column({ comment: '売上先' })
  salesTarget: string;

  //担当
  @Column({ comment: '担当' })
  rep: string;

  //売上
  @Column({ comment: '売上' })
  sales: number;

  //手数料
  @Column({ comment: '手数料' })
  fee: number;

  //売上合計
  @Column({ comment: '売上合計' })
  salesTotal: number;

  //純利益
  @Column({ comment: '純利益' })
  netProfit: number;

  //自税預
  @Column({ comment: '自税預' })
  selfTax: number;

  //名変更日
  @Column({ comment: '名変更日' })
  nameChangeDate: Date;

  @ManyToOne(
    () => AuctionListing,
    (auctionListing) => auctionListing.purchaseManagement,
  )
  auctionListing: AuctionListing;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
