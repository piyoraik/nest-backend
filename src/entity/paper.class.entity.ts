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
export class PaperClass {
  //紙類

  @PrimaryGeneratedColumn({ comment: '紙類ID' })
  id: number;

  @Column({ comment: '新車保証書' })
  securityDocument: boolean; //新車保証書

  @Column({ comment: '取扱説明書' })
  manual: boolean; //取扱説明書

  @OneToOne(() => ListingCar, (listingCar) => listingCar.paperClass)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
