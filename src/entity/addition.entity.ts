import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { ListingCar } from './listing.car.entity';

@Entity()
export class Addition {
  //付加
  @PrimaryGeneratedColumn({ comment: '付加ID' })
  id: number;

  @Column({ comment: 'PS' }) //PS
  isPS: boolean;

  @Column({ comment: 'PW' }) //PW
  isPW: boolean;

  @Column({ comment: 'AW' }) //AW
  isAW: boolean;

  @Column({ comment: 'SR' }) //SR
  isSR: boolean;

  @Column({ comment: '背面' }) //背面
  isBACK: boolean;

  @Column({ comment: 'カワ' }) //カワ
  isPEEL: boolean;

  @Column({ comment: 'AB' }) //AB
  isAB: boolean;

  @Column({ comment: 'TV' }) //TV
  isTV: boolean;

  @Column({ comment: 'ナビ' }) //ナビ
  isNAVI: boolean;

  @Column({ comment: 'Rスポ' }) //Rスポ
  isRSP: boolean;

  @Column({ comment: 'カセット' }) //カセット
  isCAS: boolean;

  @OneToOne(() => ListingCar, (listingCar) => listingCar.addition)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
