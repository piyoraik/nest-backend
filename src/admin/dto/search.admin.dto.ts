import { ArgsType, Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsDate, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class SearchAdminDTO {
  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  id?: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsNumber()
  adminId: number;

  @Field({ nullable: true })
  @IsOptional()
  @IsString()
  password: string;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  createdAt: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  updatedAt: Date;

  @Field({ nullable: true })
  @IsOptional()
  @IsDateString()
  deletedAt: Date;
}
