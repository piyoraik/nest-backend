import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import { ListingCar } from './listing.car.entity';
import { Maker } from './maker.entity';
import { CarModel } from './car.model.entity';
import { Shape } from './shape.entity';
import { Fuel } from './fuel.entity';
import { Color } from './color.entity';
import { Shift } from './shift.entity';
import { Gear } from './gear.entity';
import { AirConditioner } from './air.conditioner.entity';
import { ImportedCar } from './imported.car.entity';
import { Handle } from './handle.entity';
import { AirBack } from './air.back.entity';

import { AuctionListing } from './auction.listing.entity';

@Entity()
export class CarBodyNumber {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => ListingCar, (listingCar) => listingCar.carBodyNumber)
  listingCar: ListingCar;

  @ManyToOne(() => Maker, (maker) => maker.carBodyNumber)
  maker: Maker;

  @ManyToOne(() => CarModel, (carModel) => carModel.carBodyNumber)
  carModel: CarModel;

  @ManyToOne(() => Shape, (shape) => shape.carBodyNumber)
  shape: Shape;

  @ManyToOne(() => Fuel, (fuel) => fuel.carBodyNumber)
  fuel: Fuel;

  @ManyToOne(() => Color, (exteriorColor) => exteriorColor.carBodyNumber)
  exteriorColor: Color;

  @ManyToOne(() => Color, (interiorColor) => interiorColor.carBodyNumber)
  interiorColor: Color;

  @ManyToOne(() => Shift, (shift) => shift.carBodyNumber)
  shift: Shift;

  @ManyToOne(() => Gear, (gear) => gear.carBodyNumber)
  gear: Gear;

  @ManyToOne(
    () => AirConditioner,
    (airConditioner) => airConditioner.carBodyNumber,
  )
  airConditoner: AirConditioner;

  @ManyToOne(() => ImportedCar, (importedCar) => importedCar.carBodyNumber)
  importedCar: ImportedCar;

  @ManyToOne(() => Handle, (handle) => handle.carBodyNumber)
  handle: Handle;

  @ManyToOne(() => AirBack, (airBack) => airBack.carBodyNumber)
  airBack: AirBack;

  @Column()
  doorNumber: number;

  @Column()
  grade: string;

  @Column()
  format: string;

  @Column()
  engineSize: number;

  @Column()
  modelYear: number;

  @Column()
  colorNo: number;

  @Column()
  carBodyNumber: number;

  @Column()
  crewNumber: number;

  @Column()
  interiorColorId: number; //内装

  @Column()
  exteriorColorId: number; //外装

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(
    () => AuctionListing,
    (auctionListing) => auctionListing.carBodyNumber,
  )
  auctionListing: AuctionListing[];
}
