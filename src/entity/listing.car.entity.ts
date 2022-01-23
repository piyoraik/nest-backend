import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { EvaluationPoint } from '../enum/evaluationPoint.enum';
import { SalesPoint } from './sales.point.entity';
import { Cigarette } from '../enum/cigarette.enum';
import { MeterExchangeHistory } from '../enum/meterExchangeHistory.enum';
import { ScratchEvaluation } from '../enum/scratchEvaluation.enum';
import { CarBodyImage } from './car.body.image.entity';
import { CarHistory } from '../enum/car.history.enum';
import { CarBodyNumber } from './car.body.number.entity';
import { Addition } from './addition.entity';
import { TestingRecord } from './testing.record.entity';
import { ExhibitorEntry } from './exhibitor.entry.entity';
import { Inspection } from './inspection.entity';
import { PaperClass } from './paper.class.entity';

@Entity()
export class ListingCar {
  //出品車

  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => CarBodyNumber, (carBodyNumber) => carBodyNumber.listingCar)
  @JoinColumn()
  carBodyNumber: CarBodyNumber;

  //評価点
  @Column()
  evaluationPoint: EvaluationPoint;

  //セールスポイント
  @OneToMany(() => SalesPoint, (salesPoint) => salesPoint.listingCar)
  salesPoint: SalesPoint[];

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
  SuggestedListingOne: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  // OnetoOne
  @OneToOne(() => Addition, (addition) => addition.listingCar)
  addition: Addition;

  @OneToOne(() => TestingRecord, (testingRecord) => testingRecord.listingCar)
  testingRecord: TestingRecord;

  @OneToOne(() => ExhibitorEntry, (exhibitorEntry) => exhibitorEntry.listingCar)
  exhibitorEntry: ExhibitorEntry;

  @OneToOne(() => Inspection, (inspection) => inspection.listingCar)
  inspection: Inspection;

  @OneToOne(() => PaperClass, (paperClass) => paperClass.listingCar)
  paperClass: PaperClass;
}
