import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { EvaluationPoint } from '../enum/evaluationPoint.enum';
import { TestingRecord } from './testing.record.entity';
import { SalesPoint } from './sales.point.entity';
import { PaperClass } from './paper.class.entity';
import { Cigarette } from '../enum/cigarette.enum';
import { MeterExchangeHistory } from '../enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from '../enum/scratchEvaluation.enum';
import { CarBodyImage } from './car.body.image.entity';
import { Addition } from './addition.entity';
import { Inspection } from './inspection.entity';
import { SuggestedListing } from './suggested.listing.entity';
import { CarBodyEvaluation } from './car.body.evaluation.entity';
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
  @ManyToOne(() => SalesPoint, (salesPoint) => salesPoint.listingCar)
  salesPointId: number;

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
  @ManyToOne(() => CarBodyImage, (carBodyImage) => carBodyImage.listingCar)
  carBodyImageId: number;

  //付加
  @ManyToOne(() => Addition, (addition) => addition.listingCar)
  additionId: number;

  //検査
  @ManyToOne(() => Inspection, (inspection) => inspection.listingCar)
  inspectionId: number;

  //希望出品２
  @ManyToOne(
    () => SuggestedListing,
    (suggestedListing) => suggestedListing.listingCar,
  )
  suggestedListingId: number;

  //車体評価
  @ManyToOne(
    () => CarBodyEvaluation,
    (carBodyEvaluation) => carBodyEvaluation.listingCar,
  )
  carBodyEvaluationId: number;

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

  // @OneToMany(() => CarBodyNumber, carBodyNumber => carBodyNumber.listingCarId)
  // carBodyNumber: CarBodyNumber[]; 車体ID

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
