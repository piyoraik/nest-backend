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
import { Members } from './member.entity';

@Entity()
export class AuctionSituation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(
    () => AuctionListing,
    (auctionListing) => auctionListing.auctionSituation,
  )
  auctionListing: AuctionListing;

  @ManyToOne(() => Members, (member) => member.auctionSituation)
  membersId: Members;

  @Column()
  bidPrice: number;

  @Column()
  bidTime: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
