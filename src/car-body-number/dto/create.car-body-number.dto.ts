import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateCarBodyNumberDTO {
  @ApiProperty({
    description: 'ドア数',
    default: 4,
  })
  @IsNumber()
  doorNumber: number;

  @ApiProperty({
    description: 'グレード',
    default: 'RS-FOURZMR',
  })
  @IsString()
  grade: string;

  @ApiProperty({
    description: '型式',
    default: 'E-WGNC34',
  })
  @IsString()
  format: string;

  @ApiProperty({
    description: '排気量',
    default: '2500cc',
  })
  @IsNumber()
  engineSize: number;

  @ApiProperty({
    description: '年式',
    default: 10,
  })
  @IsNumber()
  modelYear: number;

  @ApiProperty({
    description: 'カラーNo.',
    default: 199,
  })
  @IsNumber()
  colorNo: number;

  @ApiProperty({
    description: '車体番号',
    default: 106566,
  })
  @IsNumber()
  carBodyNumber: number;

  @ApiProperty({
    description: '乗員数',
    default: 106566,
  })
  @IsNumber()
  crewNumber: number;
}

export class CreateCarBodyNumberForeignKeyDTO {
  @ApiProperty({
    description: 'メーカーID',
    default: 1,
  })
  @IsString()
  makerId: number;

  @ApiProperty({
    description: '車種名ID',
    default: 1,
  })
  @IsString()
  carModelId: number;

  @ApiProperty({
    description: '形状ID',
    default: 1,
  })
  @IsString()
  shapeId: number;

  @ApiProperty({
    description: '燃料ID',
    default: 1,
  })
  @IsString()
  fuelId: number;

  @ApiProperty({
    description: '外装色ID',
    default: 1,
  })
  @IsString()
  exteriorColorId: number;

  @ApiProperty({
    description: '内装色ID',
    default: 1,
  })
  @IsString()
  interiorColorId: number;

  @ApiProperty({
    description: 'シフトID',
    default: 1,
  })
  @IsString()
  shiftId: number;

  @ApiProperty({
    description: 'ギアID',
    default: 1,
  })
  @IsString()
  gearId: number;

  @ApiProperty({
    description: 'エアコンID',
    default: 1,
  })
  @IsString()
  airConditonerId: number;

  @ApiProperty({
    description: '輸入車ID',
    default: 1,
  })
  @IsString()
  importedCarId: number;

  @ApiProperty({
    description: 'ハンドルID',
    default: 1,
  })
  @IsString()
  handleId: number;

  @ApiProperty({
    description: 'エアバックID',
    default: 1,
  })
  @IsString()
  airBackId: number;
}
