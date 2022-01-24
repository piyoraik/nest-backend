import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ListingCar } from './listing.car.entity';

@Entity()
export class TestingRecord {
  // 検査記録
  //出品店記入

  @PrimaryGeneratedColumn({ comment: '検査記録ID' })
  id: number;

  @Column({ comment: '修復歴' })
  repaired: string; //修復歴

  @Column({ comment: 'ジャッキ' })
  jack: string; //ジャッキ

  @Column({ comment: '工具' })
  tool: string; //工具

  @Column({ comment: '出品者記入テキスト' })
  text: string; //出品者記入テキスト

  @Column({ comment: 'リサイクル料金' })
  recycling: number; //リサイクル料金

  @OneToOne(() => ListingCar, (listingCar) => listingCar.testingRecord)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
