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
import { SalesPoint } from './sales.point.entity';
import { ScratchEvaluation } from '../enum/scratchEvaluation.enum';
import { CarBodyNumber } from './car.body.number.entity';
import { Addition } from './addition.entity';
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

  //セールスポイント
  @OneToMany(() => SalesPoint, (salesPoint) => salesPoint.listingCar)
  salesPoint: SalesPoint[];

  //傷評価
  @Column({ comment: '傷評価' })
  scratchEvaluation: ScratchEvaluation;

  //仕入れ額
  @Column({ comment: '仕入れ額' })
  suggestedAmount: number;

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

  @OneToOne(() => ExhibitorEntry, (exhibitorEntry) => exhibitorEntry.listingCar)
  exhibitorEntry: ExhibitorEntry;

  @OneToOne(() => Inspection, (inspection) => inspection.listingCar)
  inspection: Inspection;

  @OneToOne(() => PaperClass, (paperClass) => paperClass.listingCar)
  paperClass: PaperClass;
}
