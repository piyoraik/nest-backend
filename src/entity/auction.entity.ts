import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  ManyToOne,
} from 'typeorm';
import { AuctionListing } from './auction.listing.entity';
import { AuctionColor } from './auction.color.entity';

@Entity()
export class Auction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  auctionName: string;

  @ManyToOne(() => AuctionColor, (color) => color.auction)
  colorId: number;

  @Column()
  subTitle: string;

  @Column()
  startTime: Date;

  @Column()
  selectionImg: string;

  @OneToMany(() => AuctionListing, (auctionListing) => auctionListing.auctionId)
  auctionListing: AuctionListing[];
}
