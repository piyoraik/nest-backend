import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateSuggestedListingDTO {
  @ApiProperty({
    description: '乗用車',
    default: '出品希望',
  })
  @IsOptional()
  @IsString()
  car: string; //乗用車

  @ApiProperty({
    description: 'ミニバン、キャンプワゴン',
    default: '-',
  })
  @IsOptional()
  @IsString()
  minivanCampWagon: string; //ミニバン、キャンプワゴン

  @ApiProperty({
    description: 'バン、トラ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  vanTruck: string; //バン、トラ

  @ApiProperty({
    description: '軽４',
    default: '-',
  })
  @IsOptional()
  @IsString()
  ligthCar: string; //軽４

  @ApiProperty({
    description: 'ドレスUP',
    default: '-',
  })
  @IsOptional()
  @IsString()
  dressUp: string; //ドレスUP

  @ApiProperty({
    description: '輸入車',
    default: '出品希望',
  })
  @IsOptional()
  @IsString()
  importedCar: string; //輸入車

  @ApiProperty({
    description: 'リフレッシュ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  refresh: string; //リフレッシュ

  @ApiProperty({
    description: '0円売り切り',
    default: '-',
  })
  @IsOptional()
  @IsString()
  sellout: string; //0円売り切り

  @ApiProperty({
    description: '乗用車ファーストNG',
    default: '-',
  })
  @IsOptional()
  @IsString()
  firstNg: string; //乗用車ファーストNG

  @ApiProperty({
    description: 'リバース',
    default: '-',
  })
  @IsOptional()
  @IsString()
  reverse: string; //リバース

  @ApiProperty({
    description: '大型',
    default: '-',
  })
  @IsOptional()
  @IsString()
  largeSize: string; //大型

  @ApiProperty({
    description: 'リサイクル',
    default: '-',
  })
  @IsOptional()
  @IsString()
  recycling: string; //リサイクル

  @ApiProperty({
    description: 'オレンジ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  orange: string; //オレンジ
}
