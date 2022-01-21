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
}
