import { Field, InputType } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

@InputType()
export class UpdateAdminDTO {
  @Field()
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  adminId: number;

  @Field()
  @ApiProperty()
  @IsOptional()
  @IsString()
  password: string;
}
