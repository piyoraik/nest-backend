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
export class Inspection {
  //検査

  @PrimaryGeneratedColumn({ comment: '検査ID' })
  id: number;

  @Column({ comment: 'キズ' }) //キズ
  isPS: boolean;

  @Column({ comment: 'コゲ' }) //コゲ
  isPW: boolean;

  @Column({ comment: 'コゲ穴' }) //コゲ穴
  isAW: boolean;

  @Column({ comment: '汚れ' }) //汚れ
  isSR: boolean;

  @Column({ comment: '破れ' }) //破れ
  isBACK: boolean;

  @Column({ comment: 'A' }) //A
  isPEEL: boolean;

  @Column({ comment: 'X要ス' }) //X要ス
  isAB: boolean;

  @OneToOne(() => ListingCar, (listingCar) => listingCar.inspection)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
