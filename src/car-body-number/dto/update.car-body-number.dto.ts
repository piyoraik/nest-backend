import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCarBodyNumberDTO {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  doorNumber: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  grade: string;

  @ApiProperty()
  @IsOptional()
  @IsString()
  format: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  engineSize: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  modelYear: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  colorNo: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  carBodyNumber: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  crewNumber: number;
}
