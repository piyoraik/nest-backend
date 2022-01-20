import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  OneToMany,
} from 'typeorm';
import { Purchase } from './purchase.entity';

@Entity()
export class Admin {
  //管理者

  @PrimaryGeneratedColumn('increment')
  id: number;

  @OneToMany(() => Purchase, (purchase) => purchase.adminId)
  purchase: Purchase[];

  @Column()
  adminId: number;

  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
