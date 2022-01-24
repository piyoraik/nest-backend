import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateCarBodyNumberDTO {
  @ApiProperty({
    description: 'ドア数',
    default: 4,
  })
  @IsOptional()
  @IsNumber()
  doorNumber: number;

  @ApiProperty({
    description: 'グレード',
    default: 'RS-FOURZMR',
  })
  @IsOptional()
  @IsString()
  grade: string;

  @ApiProperty({
    description: '型式',
    default: 'E-WGNC34',
  })
  @IsOptional()
  @IsString()
  format: string;

  @ApiProperty({
    description: '排気量',
    default: '2500cc',
  })
  @IsOptional()
  @IsString()
  engineSize: string;

  @ApiProperty({
    description: '年式',
    default: 10,
  })
  @IsOptional()
  @IsNumber()
  modelYear: number;

  @ApiProperty({
    description: 'カラーNo.',
    default: 199,
  })
  @IsOptional()
  @IsNumber()
  colorNo: number;

  @ApiProperty({
    description: '車体番号',
    default: 106566,
  })
  @IsOptional()
  @IsNumber()
  carBodyNumber: number;

  @ApiProperty({
    description: '乗員数',
    default: 4,
  })
  @IsOptional()
  @IsNumber()
  crewNumber: number;
}

export class UpdateCarBodyNumberForeignKeyDTO {
  @ApiProperty({
    description: 'メーカーID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  makerId: number;

  @ApiProperty({
    description: '車種名ID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  carModelId: number;

  @ApiProperty({
    description: '形状ID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  shapeId: number;

  @ApiProperty({
    description: '燃料ID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  fuelId: number;

  @ApiProperty({
    description: '外装色ID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  exteriorColorId: number;

  @ApiProperty({
    description: '内装色ID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  interiorColorId: number;

  @ApiProperty({
    description: 'シフトID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  shiftId: number;

  @ApiProperty({
    description: 'ギアID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  gearId: number;

  @ApiProperty({
    description: 'エアコンID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  airConditonerId: number;

  @ApiProperty({
    description: '輸入車ID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  importedCarId: number;

  @ApiProperty({
    description: 'ハンドルID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  handleId: number;

  @ApiProperty({
    description: 'エアバックID',
    default: 1,
  })
  @IsOptional()
  @IsString()
  airBackId: number;
}
