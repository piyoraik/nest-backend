import { IsOptional, IsString } from 'class-validator';

export class CreateSuggestedListingDTO {
  @IsOptional()
  @IsString()
  car: string; //乗用車

  @IsOptional()
  @IsString()
  minivanCampWagon: string; //ミニバン、キャンプワゴン

  @IsOptional()
  @IsString()
  vanTruck: string; //バン、トラ

  @IsOptional()
  @IsString()
  ligthCar: string; //軽４

  @IsOptional()
  @IsString()
  dressUp: string; //ドレスUP

  @IsOptional()
  @IsString()
  importedCar: string; //輸入車

  @IsOptional()
  @IsString()
  refresh: string; //リフレッシュ

  @IsOptional()
  @IsString()
  sellout: string; //0円売り切り

  @IsOptional()
  @IsString()
  firstNg: string; //乗用車ファーストNG

  @IsOptional()
  @IsString()
  reverse: string; //リバース

  @IsOptional()
  @IsString()
  largeSize: string; //大型

  @IsOptional()
  @IsString()
  recycling: string; //リサイクル

  @IsOptional()
  @IsString()
  orange: string; //オレンジ
}
