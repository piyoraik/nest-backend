import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    ManyToOne
} from "typeorm";
import { AuctionListing } from "./auction.listing.entity";


@Entity()
export class Price {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(() => AuctionListing, auctionListing => auctionListing.auctionSituation)
    auctionListing: AuctionListing

    @Column()
    successfulBidPrice: number;

    @Column()
    successfulbidCommission: number;

    @Column()
    useCommission: number;

    @Column()
    consumptionTax: number;

    @Column()
    deliveryCommission: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

}