import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSuggestedListingDTO {
  @ApiProperty()
  @IsString()
  car: string; //乗用車

  @ApiProperty()
  @IsString()
  minivanCampWagon: string; //ミニバン、キャンプワゴン

  @ApiProperty()
  @IsString()
  vanTruck: string; //バン、トラ

  @ApiProperty()
  @IsString()
  ligthCar: string; //軽４

  @ApiProperty()
  @IsString()
  dressUp: string; //ドレスUP

  @ApiProperty()
  @IsString()
  importedCar: string; //輸入車

  @ApiProperty()
  @IsString()
  refresh: string; //リフレッシュ

  @ApiProperty()
  @IsString()
  sellout: string; //0円売り切り

  @ApiProperty()
  @IsString()
  firstNg: string; //乗用車ファーストNG

  @ApiProperty()
  @IsString()
  reverse: string; //リバース

  @ApiProperty()
  @IsString()
  largeSize: string; //大型

  @ApiProperty()
  @IsString()
  recycling: string; //リサイクル

  @ApiProperty()
  @IsString()
  orange: string; //オレンジ
}
