import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { EvaluationPoint } from '../enum/evaluationPoint.enum';
import { SalesPoint } from './sales.point.entity';
import { PaperClass } from './paper.class.entity';
import { Cigarette } from '../enum/cigarette.enum';
import { MeterExchangeHistory } from '../enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from '../enum/scratchEvaluation.enum';
import { CarBodyImage } from './car.body.image.entity';
import { SuggestedListing } from './suggested.listing.entity';
import { CarHistory } from '../enum/car.history.enum';

@Entity()
export class ListingCar {
  //出品車

  @PrimaryGeneratedColumn()
  id: number;

  //評価点
  @Column()
  evaluationPoint: EvaluationPoint;

  //セールスポイント
  @OneToMany(() => SalesPoint, (salesPoint) => salesPoint.listingCar)
  salesPoint: SalesPoint[];

  //紙類
  @ManyToOne(() => PaperClass, (paperClass) => paperClass.listingCar)
  paperClassId: number;

  //タバコ ＊変更
  @Column()
  cigarette: Cigarette;

  //メーター交換歴 ＊変更
  @Column()
  meterExchangeHistory: MeterExchangeHistory;

  //傷評価 ＊変更
  @Column()
  scratchEvaluation: ScratchEvaluation;

  //車体画像
  @OneToMany(() => CarBodyImage, (carBodyImage) => carBodyImage.listingCar)
  CarBodyImage: CarBodyImage[];

  //希望出品２
  @ManyToOne(
    () => SuggestedListing,
    (suggestedListing) => suggestedListing.listingCar,
  )
  suggestedListingId: number;

  //車歴 ＊変更
  @Column()
  CarHistory: CarHistory;

  //車検
  @Column()
  carInspection: string;

  //仕入れ額
  @Column()
  suggestedAmount: number;

  //走行距離
  @Column()
  mileage: number;

  //外装
  @Column()
  exterior: number;

  //内装
  @Column()
  interior: number;

  //色替
  @Column()
  IschangeColor: number;

  //希望出品１
  @Column()
  suggestedListing: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
