import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreateSuggestedListingDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  car: string; //乗用車

  @ApiProperty()
  @IsOptional()
  @IsString()
  minivanCampWagon: string; //ミニバン、キャンプワゴン

  @ApiProperty()
  @IsOptional()
  @IsString()
  vanTruck: string; //バン、トラ

  @ApiProperty()
  @IsOptional()
  @IsString()
  ligthCar: string; //軽４

  @ApiProperty()
  @IsOptional()
  @IsString()
  dressUp: string; //ドレスUP

  @ApiProperty()
  @IsOptional()
  @IsString()
  importedCar: string; //輸入車

  @ApiProperty()
  @IsOptional()
  @IsString()
  refresh: string; //リフレッシュ

  @ApiProperty()
  @IsOptional()
  @IsString()
  sellout: string; //0円売り切り

  @ApiProperty()
  @IsOptional()
  @IsString()
  firstNg: string; //乗用車ファーストNG

  @ApiProperty()
  @IsOptional()
  @IsString()
  reverse: string; //リバース

  @ApiProperty()
  @IsOptional()
  @IsString()
  largeSize: string; //大型

  @ApiProperty()
  @IsOptional()
  @IsString()
  recycling: string; //リサイクル

  @ApiProperty()
  @IsOptional()
  @IsString()
  orange: string; //オレンジ
}
