import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSuggestedListingDTO {
  @ApiProperty({
    description: '乗用車',
    default: '出品希望',
  })
  @IsString()
  car: string; //乗用車

  @ApiProperty({
    description: 'ミニバン、キャンプワゴン',
    default: '-',
  })
  @IsString()
  minivanCampWagon: string; //ミニバン、キャンプワゴン

  @ApiProperty({
    description: 'バン、トラ',
    default: '-',
  })
  @IsString()
  vanTruck: string; //バン、トラ

  @ApiProperty({
    description: '軽４',
    default: '-',
  })
  @IsString()
  ligthCar: string; //軽４

  @ApiProperty({
    description: 'ドレスUP',
    default: '-',
  })
  @IsString()
  dressUp: string; //ドレスUP

  @ApiProperty({
    description: '輸入車',
    default: '出品希望',
  })
  @IsString()
  importedCar: string; //輸入車

  @ApiProperty({
    description: 'リフレッシュ',
    default: '-',
  })
  @IsString()
  refresh: string; //リフレッシュ

  @ApiProperty({
    description: '0円売り切り',
    default: '-',
  })
  @IsString()
  sellout: string; //0円売り切り

  @ApiProperty({
    description: '乗用車ファーストNG',
    default: '-',
  })
  @IsString()
  firstNg: string; //乗用車ファーストNG

  @ApiProperty({
    description: 'リバース',
    default: '-',
  })
  @IsString()
  reverse: string; //リバース

  @ApiProperty({
    description: '大型',
    default: '-',
  })
  @IsString()
  largeSize: string; //大型

  @ApiProperty({
    description: 'リサイクル',
    default: '-',
  })
  @IsString()
  recycling: string; //リサイクル

  @ApiProperty({
    description: 'オレンジ',
    default: '-',
  })
  @IsString()
  orange: string; //オレンジ
}
