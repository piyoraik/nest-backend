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

export class UpdateCarBodyNumberForeignKeyDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  makerId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  carModelId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  shapeId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  fuelId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  exteriorColorId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  interiorColorId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  shiftId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  gearId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  airConditonerId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  importedCarId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  handleId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  airBackId: number;
}
