import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class CreateCarBodyNumberDTO {
  @ApiProperty()
  @IsNumber()
  doorNumber: number;

  @ApiProperty()
  @IsString()
  grade: string;

  @ApiProperty()
  @IsString()
  format: string;

  @ApiProperty()
  @IsNumber()
  engineSize: number;

  @ApiProperty()
  @IsNumber()
  modelYear: number;

  @ApiProperty()
  @IsNumber()
  colorNo: number;

  @ApiProperty()
  @IsNumber()
  carBodyNumber: number;

  @ApiProperty()
  @IsNumber()
  crewNumber: number;
}

export class CreateCarBodyNumberForeignKeyDTO {
  @ApiProperty()
  @IsString()
  makerId: number;

  @ApiProperty()
  @IsString()
  carModelId: number;

  @ApiProperty()
  @IsString()
  shapeId: number;

  @ApiProperty()
  @IsString()
  fuelId: number;

  @ApiProperty()
  @IsString()
  exteriorColorId: number;

  @ApiProperty()
  @IsString()
  interiorColorId: number;

  @ApiProperty()
  @IsString()
  shiftId: number;

  @ApiProperty()
  @IsString()
  gearId: number;

  @ApiProperty()
  @IsString()
  airConditonerId: number;

  @ApiProperty()
  @IsString()
  importedCarId: number;

  @ApiProperty()
  @IsString()
  handleId: number;

  @ApiProperty()
  @IsString()
  airBackId: number;
}

export class QueryCarBodyNumberForeignKey {
  makerId: string;
  carModelId: string;
  shapeId: string;
  fuelId: string;
  exteriorColorId: string;
  interiorColorId: string;
  shiftId: string;
  gearId: string;
  airConditonerId: string;
  importedCarId: string;
  handleId: string;
  airBackId: string;
}
