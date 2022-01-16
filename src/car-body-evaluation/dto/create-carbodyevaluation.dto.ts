import { IsString } from 'class-validator';

export class CreateCarBodyEvaluationDTO {
  @IsString()
  left_f_tire: string; //左Fタイヤ

  @IsString()
  left_r_tire: string; //左Rタイヤ

  @IsString()
  right_f_tire: string; //右Fタイヤ

  @IsString()
  right_r_tire: string; //右Rタイヤ

  @IsString()
  spare_tire: string; //スペアタイヤ

  @IsString()
  f_bumper: string; //Fバンパー

  @IsString()
  left_f_fender: string; //左Fフェンダー

  @IsString()
  left_f_door: string; //左Fドア

  @IsString()
  left_locker_panel: string; //左ロッカーパネル

  @IsString()
  left_r_door: string; //左Rドア

  @IsString()
  left_quarter: string; //左クォーター

  @IsString()
  left_r_bumper: string; //左Rバンパー

  @IsString()
  bonnet: string; //ボンネット

  @IsString()
  f_under_aero_parts: string; //Fアンダースポイラ

  @IsString()
  f_glass: string; //Fガラス

  @IsString()
  roof: string; //ルーフ

  @IsString()
  r_glass: string; //Rガラス

  @IsString()
  trunk: string; //トランク

  @IsString()
  r_under_aero_parts: string; //Rアンダースポイラ

  @IsString()
  f_panel: string; //Fパネル

  @IsString()
  right_fender: string; //右フェンダー

  @IsString()
  right_door: string; //右ドア

  @IsString()
  right_locker_panel: string; //右ロッカーパネル

  @IsString()
  right_r_door: string; //右Rドア

  @IsString()
  right_quarter: string; //右クォーター

  @IsString()
  r_panel: string; //Rパネル
}
