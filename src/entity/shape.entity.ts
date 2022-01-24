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
export class Shape {
  @PrimaryGeneratedColumn({ comment: '形状ID' })
  id: number;

  @Column({ comment: '形状名' })
  name: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;

  @OneToMany(() => CarBodyNumber, (carBodyNumber) => carBodyNumber.shape)
  carBodyNumber: CarBodyNumber[];
}
