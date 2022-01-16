import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
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

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  repaired: string; //修復歴

  @Column()
  jack: string; //ジャッキ

  @Column()
  tool: string; //工具

  @Column()
  text: string; //出品者記入テキスト

  @Column()
  recycling: number; //リサイクル料金

  @OneToOne(() => ListingCar)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
