import { IsString } from 'class-validator';

export class CreateSuggestedListingDTO {
  @IsString()
  car: string; //乗用車

  @IsString()
  minivanCampWagon: string; //ミニバン、キャンプワゴン

  @IsString()
  vanTruck: string; //バン、トラ

  @IsString()
  ligthCar: string; //軽４

  @IsString()
  dressUp: string; //ドレスUP

  @IsString()
  importedCar: string; //輸入車

  @IsString()
  refresh: string; //リフレッシュ

  @IsString()
  sellout: string; //0円売り切り

  @IsString()
  firstNg: string; //乗用車ファーストNG

  @IsString()
  reverse: string; //リバース

  @IsString()
  largeSize: string; //大型

  @IsString()
  recycling: string; //リサイクル

  @IsString()
  orange: string; //オレンジ
}
