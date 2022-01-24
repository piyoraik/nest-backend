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

  @PrimaryGeneratedColumn({ comment: '出品車ID' })
  id: number;

  @OneToOne(() => CarBodyNumber, (carBodyNumber) => carBodyNumber.listingCar)
  @JoinColumn()
  carBodyNumber: CarBodyNumber;

  //評価点
  @Column({ comment: '評価点' })
  evaluationPoint: EvaluationPoint;

  //セールスポイント
  @OneToMany(() => SalesPoint, (salesPoint) => salesPoint.listingCar)
  salesPoint: SalesPoint[];

  //タバコ ＊変更
  @Column({ comment: 'タバコ' })
  cigarette: Cigarette;

  //メーター交換歴 ＊変更
  @Column({ comment: 'メーター交換歴' })
  meterExchangeHistory: MeterExchangeHistory;

  //傷評価 ＊変更
  @Column({ comment: '傷評価' })
  scratchEvaluation: ScratchEvaluation;

  //車体画像
  @OneToMany(() => CarBodyImage, (carBodyImage) => carBodyImage.listingCar)
  CarBodyImage: CarBodyImage[];

  //車歴 ＊変更
  @Column({ comment: '車歴' })
  CarHistory: CarHistory;

  //車検
  @Column({ comment: '車検' })
  carInspection: string;

  //仕入れ額
  @Column({ comment: '仕入れ額' })
  suggestedAmount: number;

  //走行距離
  @Column({ comment: '走行距離' })
  mileage: number;

  //外装
  @Column({ comment: '外装' })
  exterior: ScratchEvaluation;

  //内装
  @Column({ comment: '内装' })
  interior: ScratchEvaluation;

  //色替
  @Column({ comment: '色替' })
  IschangeColor: boolean;

  //希望出品１
  @Column({ comment: '希望出品１' })
  SuggestedListingOne: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
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
