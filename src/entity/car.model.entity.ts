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
export class CarModel {
  @PrimaryGeneratedColumn({ comment: '車種名ID' })
  id: number;

  @Column({ comment: '車種名' })
  name: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;

  @OneToMany(() => CarBodyNumber, (carBodyNumber) => carBodyNumber.carModel)
  carBodyNumber: CarBodyNumber[];
}
