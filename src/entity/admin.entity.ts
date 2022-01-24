import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Admin {
  //管理者

  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ comment: '管理者ID' })
  adminId: number;

  @Column({ comment: 'パスワード' })
  password: string;

  @CreateDateColumn({ comment: '作成日時' })
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  deletedAt: Date;
}
