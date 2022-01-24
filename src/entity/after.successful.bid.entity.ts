import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';

import { CarOption } from '../enum/option.enum';
import { PaymentMethod } from '../enum/paymentMethod.enum';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';

@Entity()
export class AfterSuccessfulBid {
  //落札後

  @PrimaryGeneratedColumn({ comment: '落札後ID' })
  id: number;

  //オークション出品車
  @OneToOne(
    () => AuctionListing,
    (auctionListing) => auctionListing.afterSuccessfulBid,
  )
  auctionListing: AuctionListing;

  //オプション
  @Column({ comment: 'オプション' })
  option: CarOption;

  //配送
  @Column({ comment: '配送' })
  deliveryMethod: DeliveryMethod;

  //フェリー
  @Column({ comment: 'フェリー' })
  isFerry: boolean;

  //支払い方法
  @Column({ comment: '支払い方法' })
  paymentMethod: PaymentMethod;

  //入金
  @Column({ comment: '入金' })
  isPayment: boolean;

  //納品
  @Column({ comment: '納品' })
  isDelivery: boolean;

  //キャンセル
  @Column({ comment: 'キャンセル' })
  isCancelled: boolean;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
