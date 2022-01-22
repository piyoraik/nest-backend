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

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  listingCarId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  makerId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  carModelId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  shapeId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  fuelId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  exteriorColorId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  interiorColorId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  shiftId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  gearId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  airConditonerId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  importedCarId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  handleId: number;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  airBackId: number;
}
