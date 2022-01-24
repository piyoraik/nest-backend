import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
  JoinColumn,
  OneToOne,
} from 'typeorm';

import { CarBodyNumber } from './car.body.number.entity';
import { ListingCar } from './listing.car.entity';

@Entity()
export class ExhibitorEntry {
  @PrimaryGeneratedColumn({ comment: '出品店記入' })
  id: number;

  @Column({ comment: '修復歴' })
  repairHistory: boolean;

  @Column({ comment: 'ジャッキ' })
  jack: boolean;

  @Column({ comment: '工具' })
  tool: boolean;

  @Column({ comment: 'テキスト' })
  text: string;

  @Column({ comment: 'リサイクル料金' })
  recyclePrice: number;

  @OneToOne(() => ListingCar, (listingCar) => listingCar.exhibitorEntry)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;

  @OneToMany(() => CarBodyNumber, (carBodyNumber) => carBodyNumber.maker)
  carBodyNumber: CarBodyNumber[];
}
