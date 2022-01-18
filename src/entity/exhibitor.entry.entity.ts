import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    OneToMany,
    JoinColumn,
    OneToOne
} from "typeorm";

import { CarBodyNumber } from "./car.body.number.entity";
import { ListingCar } from './listing.car.entity';


@Entity()
export class ExhibitorEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    repairHistory: boolean;

    @Column()
    jack: boolean;

    @Column()
    tool: boolean;

    @Column()
    text: string;

    @Column()
    recyclePrice: number;

    @OneToOne(() => ListingCar)
    @JoinColumn()
    listingCar: ListingCar;


    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @DeleteDateColumn()
    deletedAt: Date;

    @OneToMany(() => CarBodyNumber, carBodyNumber => carBodyNumber.maker)
    carBodyNumber: CarBodyNumber[];

}