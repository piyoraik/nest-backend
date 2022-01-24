import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { ListingCar } from './listing.car.entity';

@Entity()
export class CarBodyEvaluation {
  //車体評価

  @PrimaryGeneratedColumn({ comment: '車体評価ID' })
  id: number;

  @Column({ comment: '左Fタイヤ' })
  left_f_tire: string; //左Fタイヤ

  @Column({ comment: '左Rタイヤ' })
  left_r_tire: string; //左Rタイヤ

  @Column({ comment: '右Fタイヤ' })
  right_f_tire: string; //右Fタイヤ

  @Column({ comment: '右Rタイヤ' })
  right_r_tire: string; //右Rタイヤ

  @Column({ comment: 'スペアタイヤ' })
  spare_tire: string; //スペアタイヤ

  @Column({ comment: 'Fバンパー' })
  f_bumper: string; //Fバンパー

  @Column({ comment: '左Fフェンダー' })
  left_f_fender: string; //左Fフェンダー

  @Column({ comment: '左Fドア' })
  left_f_door: string; //左Fドア

  @Column({ comment: '左ロッカーパネル' })
  left_locker_panel: string; //左ロッカーパネル

  @Column({ comment: '左Rドア' })
  left_r_door: string; //左Rドア

  @Column({ comment: '左クォーター' })
  left_quarter: string; //左クォーター

  @Column({ comment: 'ボンネット' })
  left_r_bumper: string; //左Rバンパー

  @Column({ comment: 'ボンネット' })
  bonnet: string; //ボンネット

  @Column({ comment: 'Fアンダースポイラ' })
  f_under_aero_parts: string; //Fアンダースポイラ

  @Column({ comment: 'Fガラス' })
  f_glass: string; //Fガラス

  @Column({ comment: 'ルーフ' })
  roof: string; //ルーフ

  @Column({ comment: 'Rガラス' })
  r_glass: string; //Rガラス

  @Column({ comment: 'トランク' })
  trunk: string; //トランク

  @Column({ comment: 'Rアンダースポイラ' })
  r_under_aero_parts: string; //Rアンダースポイラ

  @Column({ comment: 'Fパネル' })
  f_panel: string; //Fパネル

  @Column({ comment: '右フェンダー' })
  right_fender: string; //右フェンダー

  @Column({ comment: '右ドア' })
  right_door: string; //右ドア

  @Column({ comment: '右ロッカーパネル' })
  right_locker_panel: string; //右ロッカーパネル

  @Column({ comment: '右Rドア' })
  right_r_door: string; //右Rドア

  @Column({ comment: '右クォーター' })
  right_quarter: string; //右クォーター

  @Column({ comment: 'Rパネル' })
  r_panel: string; //Rパネル

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
