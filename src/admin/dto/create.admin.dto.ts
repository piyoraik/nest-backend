import { Field, InputType, Int } from '@nestjs/graphql';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateAdminDTO {
  @Field((type) => Int)
  @ApiProperty()
  @IsNumber()
  adminId: number;

  @Field((type) => String)
  @ApiProperty()
  @ApiProperty()
  @IsString()
  password: string;
}
