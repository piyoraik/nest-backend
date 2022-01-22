import { ApiProperty } from '@nestjs/swagger';
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

  @ApiProperty()
  @IsNumber()
  listingCarId: number;

  @ApiProperty()
  @IsNumber()
  makerId: number;

  @ApiProperty()
  @IsNumber()
  carModelId: number;

  @ApiProperty()
  @IsNumber()
  shapeId: number;

  @ApiProperty()
  @IsNumber()
  fuelId: number;

  @ApiProperty()
  @IsNumber()
  exteriorColorId: number;

  @ApiProperty()
  @IsNumber()
  interiorColorId: number;

  @ApiProperty()
  @IsNumber()
  shiftId: number;

  @ApiProperty()
  @IsNumber()
  gearId: number;

  @ApiProperty()
  @IsNumber()
  airConditonerId: number;

  @ApiProperty()
  @IsNumber()
  importedCarId: number;

  @ApiProperty()
  @IsNumber()
  handleId: number;

  @ApiProperty()
  @IsNumber()
  airBackId: number;
}
