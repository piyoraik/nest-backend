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
export class SuggestedListing {
  //希望出品

  //ここも一旦stringにしています。

  @PrimaryGeneratedColumn({ comment: '希望出品' })
  id: number;

  @Column({ comment: '乗用車' })
  car: string; //乗用車

  @Column({ comment: 'ミニバン、キャンプワゴン' })
  minivanCampWagon: string; //ミニバン、キャンプワゴン

  @Column({ comment: 'バン、トラ' })
  vanTruck: string; //バン、トラ

  @Column({ comment: '軽４' })
  ligthCar: string; //軽４

  @Column({ comment: 'ドレスUP' })
  dressUp: string; //ドレスUP

  @Column({ comment: '輸入車' })
  importedCar: string; //輸入車

  @Column({ comment: 'リフレッシュ' })
  refresh: string; //リフレッシュ

  @Column({ comment: '0円売り切り' })
  sellout: string; //0円売り切り

  @Column({ comment: '乗用車ファーストNG' })
  firstNg: string; //乗用車ファーストNG

  @Column({ comment: 'リバース' })
  reverse: string; //リバース

  @Column({ comment: '大型' })
  largeSize: string; //大型

  @Column({ comment: 'リサイクル' })
  recycling: string; //リサイクル

  @Column({ comment: 'オレンジ' })
  orange: string; //オレンジ

  @OneToOne(() => ListingCar)
  @JoinColumn()
  listingCar: ListingCar;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
