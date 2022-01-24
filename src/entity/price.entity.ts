import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';
import { Members } from './members.entity';

@Entity()
export class Price {
  @PrimaryGeneratedColumn({ comment: '落札後ID' })
  id: number;

  @OneToOne(() => AuctionListing, (auctionListing) => auctionListing.price)
  @JoinColumn()
  auctionListing: AuctionListing;

  @ManyToOne(() => Members, (member) => member.prices)
  member: Members;

  @Column({ comment: '落札価格' })
  successfulBidPrice: number;

  @Column({ comment: '落札手数料' })
  successfulBidCommission: number;

  @Column({ comment: '利用手数料' })
  useCommission: number;

  @Column({ comment: '消費税' })
  consumptionTax: number;

  @Column({ comment: '配送手数料' })
  deliveryCommission: number;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
