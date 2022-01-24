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
  @PrimaryGeneratedColumn({ comment: '車体ID' })
  id: number;

  @OneToOne(() => ListingCar, (listingCar) => listingCar.carBodyNumber)
  listingCar: ListingCar;

  @ManyToOne(() => Maker, (maker) => maker.carBodyNumber)
  maker: Maker;
  @Column({ comment: 'メーカーID' })
  makerId: number;

  @ManyToOne(() => CarModel, (carModel) => carModel.carBodyNumber)
  carModel: CarModel;
  @Column({ comment: '車種名ID' })
  carModelId: number;

  @ManyToOne(() => Shape, (shape) => shape.carBodyNumber)
  shape: Shape;
  @Column({ comment: '形状ID' })
  shapeId: number;

  @ManyToOne(() => Fuel, (fuel) => fuel.carBodyNumber)
  fuel: Fuel;
  @Column({ comment: '燃料ID' })
  fuelId: number;

  @ManyToOne(
    () => Color,
    (exteriorColor) => exteriorColor.carBodyNumberExterior,
  )
  exteriorColor: Color;
  @Column({ comment: '外装色ID' })
  exteriorColorId: number;

  @ManyToOne(
    () => Color,
    (interiorColor) => interiorColor.carBodyNumberInterior,
  )
  interiorColor: Color;
  @Column({ comment: '内装色ID' })
  interiorColorId: number;

  @ManyToOne(() => Shift, (shift) => shift.carBodyNumber)
  shift: Shift;
  @Column({ comment: 'シフトID' })
  shiftId: number;

  @ManyToOne(() => Gear, (gear) => gear.carBodyNumber)
  gear: Gear;
  @Column({ comment: 'ギアID' })
  gearId: number;

  @ManyToOne(
    () => AirConditioner,
    (airConditioner) => airConditioner.carBodyNumber,
  )
  airConditoner: AirConditioner;
  @Column({ comment: 'エアコンID' })
  airConditonerId: number;

  @ManyToOne(() => ImportedCar, (importedCar) => importedCar.carBodyNumber)
  importedCar: ImportedCar;
  @Column({ comment: '輸入車ID' })
  importedCarId: number;

  @ManyToOne(() => Handle, (handle) => handle.carBodyNumber)
  handle: Handle;
  @Column({ comment: 'ハンドルID' })
  handleId: number;

  @ManyToOne(() => AirBack, (airBack) => airBack.carBodyNumber)
  airBack: AirBack;
  @Column({ comment: 'エアバックID' })
  airBackId: number;

  @Column({ comment: 'ドア数' })
  doorNumber: number;

  @Column({ comment: 'グレード' })
  grade: string;

  @Column({ comment: '型式' })
  format: string;

  @Column({ comment: '排気量' })
  engineSize: string;

  @Column({ comment: '年式' })
  modelYear: number;

  @Column({ comment: 'カラー.NO' })
  colorNo: number;

  @Column({ comment: '車体番号' })
  carBodyNumber: number;

  @Column({ comment: '乗員数' })
  crewNumber: number;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;

  @OneToMany(
    () => AuctionListing,
    (auctionListing) => auctionListing.carBodyNumber,
  )
  auctionListing: AuctionListing[];
}
