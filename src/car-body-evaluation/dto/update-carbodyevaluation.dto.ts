import { IsOptional, IsString } from 'class-validator';

export class UpdateCarBodyEvaluationDTO {
  @IsOptional()
  @IsString()
  left_f_tire: string; //左Fタイヤ

  @IsOptional()
  @IsString()
  left_r_tire: string; //左Rタイヤ

  @IsOptional()
  @IsString()
  right_f_tire: string; //右Fタイヤ

  @IsOptional()
  @IsString()
  right_r_tire: string; //右Rタイヤ

  @IsOptional()
  @IsString()
  spare_tire: string; //スペアタイヤ

  @IsOptional()
  @IsString()
  f_bumper: string; //Fバンパー

  @IsOptional()
  @IsString()
  left_f_fender: string; //左Fフェンダー

  @IsOptional()
  @IsString()
  left_f_door: string; //左Fドア

  @IsOptional()
  @IsString()
  left_locker_panel: string; //左ロッカーパネル

  @IsOptional()
  @IsString()
  left_r_door: string; //左Rドア

  @IsOptional()
  @IsString()
  left_quarter: string; //左クォーター

  @IsOptional()
  @IsString()
  left_r_bumper: string; //左Rバンパー

  @IsOptional()
  @IsString()
  bonnet: string; //ボンネット

  @IsOptional()
  @IsString()
  f_under_aero_parts: string; //Fアンダースポイラ

  @IsOptional()
  @IsString()
  f_glass: string; //Fガラス

  @IsOptional()
  @IsString()
  roof: string; //ルーフ

  @IsOptional()
  @IsString()
  r_glass: string; //Rガラス

  @IsOptional()
  @IsString()
  trunk: string; //トランク

  @IsOptional()
  @IsString()
  r_under_aero_parts: string; //Rアンダースポイラ

  @IsOptional()
  @IsString()
  f_panel: string; //Fパネル

  @IsOptional()
  @IsString()
  right_fender: string; //右フェンダー

  @IsOptional()
  @IsString()
  right_door: string; //右ドア

  @IsOptional()
  @IsString()
  right_locker_panel: string; //右ロッカーパネル

  @IsOptional()
  @IsString()
  right_r_door: string; //右Rドア

  @IsOptional()
  @IsString()
  right_quarter: string; //右クォーター

  @IsOptional()
  @IsString()
  r_panel: string; //Rパネル
}
