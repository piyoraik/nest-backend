import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
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

  @OneToOne(() => ListingCar, (listingCar) => listingCar.carBodyNumber)
  listingCar: ListingCar;

  @ManyToOne(() => Maker, (maker) => maker.carBodyNumber)
  maker: Maker;
  @Column()
  makerId: number;

  @ManyToOne(() => CarModel, (carModel) => carModel.carBodyNumber)
  carModel: CarModel;
  @Column()
  carModelId: number;

  @ManyToOne(() => Shape, (shape) => shape.carBodyNumber)
  shape: Shape;
  @Column()
  shapeId: number;

  @ManyToOne(() => Fuel, (fuel) => fuel.carBodyNumber)
  fuel: Fuel;
  @Column()
  fuelId: number;

  @ManyToOne(
    () => Color,
    (exteriorColor) => exteriorColor.carBodyNumberExterior,
  )
  exteriorColor: Color;
  @Column()
  exteriorColorId: number;

  @ManyToOne(
    () => Color,
    (interiorColor) => interiorColor.carBodyNumberInterior,
  )
  interiorColor: Color;
  @Column()
  interiorColorId: number;

  @ManyToOne(() => Shift, (shift) => shift.carBodyNumber)
  shift: Shift;
  @Column()
  shiftId: number;

  @ManyToOne(() => Gear, (gear) => gear.carBodyNumber)
  gear: Gear;
  @Column()
  gearId: number;

  @ManyToOne(
    () => AirConditioner,
    (airConditioner) => airConditioner.carBodyNumber,
  )
  airConditoner: AirConditioner;
  @Column()
  airConditonerId: number;

  @ManyToOne(() => ImportedCar, (importedCar) => importedCar.carBodyNumber)
  importedCar: ImportedCar;
  @Column()
  importedCarId: number;

  @ManyToOne(() => Handle, (handle) => handle.carBodyNumber)
  handle: Handle;
  @Column()
  handleId: number;

  @ManyToOne(() => AirBack, (airBack) => airBack.carBodyNumber)
  airBack: AirBack;
  @Column()
  airBackId: number;

  @Column()
  doorNumber: number;

  @Column()
  grade: string;

  @Column()
  format: string;

  @Column()
  engineSize: string;

  @Column()
  modelYear: number;

  @Column()
  colorNo: number;

  @Column()
  carBodyNumber: number;

  @Column()
  crewNumber: number;

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
