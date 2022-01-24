import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';
import { Members } from './members.entity';

@Entity()
export class AuctionSituation {
  @PrimaryGeneratedColumn({ comment: '入札ID' })
  id: number;

  @ManyToOne(
    () => AuctionListing,
    (auctionListing) => auctionListing.auctionSituation,
  )
  auctionListing: AuctionListing;
  @Column()
  auctionListingId: number;

  @ManyToOne(() => Members, (member) => member.auctionSituation)
  member: Members;

  @Column({ comment: '入札価格' })
  bidPrice: number;

  @Column({ comment: '入札時間' })
  bidTime: Date;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
