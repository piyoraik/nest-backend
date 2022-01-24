import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';

import { CarBodyNumber } from './car.body.number.entity';

@Entity()
export class AirConditioner {
  @PrimaryGeneratedColumn({ comment: 'エアコンID' })
  id: number;

  @Column({ comment: 'エアコン' })
  name: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;

  @OneToMany(
    () => CarBodyNumber,
    (carBodyNumber) => carBodyNumber.airConditoner,
  )
  carBodyNumber: CarBodyNumber[];
}
