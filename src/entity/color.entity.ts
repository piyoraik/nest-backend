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
export class Color {
  @PrimaryGeneratedColumn({ comment: 'カラーID' })
  id: number;

  @Column({ comment: 'カラー名' })
  name: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;

  @OneToMany(
    () => CarBodyNumber,
    (carBodyNumber) => carBodyNumber.exteriorColor,
  )
  carBodyNumberExterior: CarBodyNumber[];

  @OneToMany(
    () => CarBodyNumber,
    (carBodyNumber) => carBodyNumber.interiorColor,
  )
  carBodyNumberInterior: CarBodyNumber[];
}
