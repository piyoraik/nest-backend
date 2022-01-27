import { Field, ID, InputType, ObjectType } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Admin {
  //管理者

  @PrimaryGeneratedColumn('increment')
  @Field()
  @IsOptional()
  id: number;

  @Column({ comment: '管理者ID' })
  @Field()
  @IsOptional()
  adminId: number;

  @Column({ comment: 'パスワード' })
  @Field()
  @IsOptional()
  password: string;

  @CreateDateColumn({ comment: '作成日時' })
  @Field()
  @IsOptional()
  createdAt: Date;

  @UpdateDateColumn({ comment: '更新日時' })
  @Field()
  @IsOptional()
  updatedAt: Date;

  @DeleteDateColumn({ comment: '削除日時' })
  @Field({ nullable: true })
  @IsOptional()
  deletedAt: Date;
}
