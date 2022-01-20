import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString } from 'class-validator';

export class CreateCarBodyEvaluationDTO {
  @ApiProperty()
  @IsString()
  left_f_tire: string; //左Fタイヤ

  @ApiProperty()
  @IsString()
  left_r_tire: string; //左Rタイヤ

  @ApiProperty()
  @IsString()
  right_f_tire: string; //右Fタイヤ

  @ApiProperty()
  @IsString()
  right_r_tire: string; //右Rタイヤ

  @ApiProperty()
  @IsString()
  spare_tire: string; //スペアタイヤ

  @ApiProperty()
  @IsString()
  f_bumper: string; //Fバンパー

  @ApiProperty()
  @IsString()
  left_f_fender: string; //左Fフェンダー

  @ApiProperty()
  @IsString()
  left_f_door: string; //左Fドア

  @ApiProperty()
  @IsString()
  left_locker_panel: string; //左ロッカーパネル

  @ApiProperty()
  @IsString()
  left_r_door: string; //左Rドア

  @ApiProperty()
  @IsString()
  left_quarter: string; //左クォーター

  @ApiProperty()
  @IsString()
  left_r_bumper: string; //左Rバンパー

  @ApiProperty()
  @IsString()
  bonnet: string; //ボンネット

  @ApiProperty()
  @IsString()
  f_under_aero_parts: string; //Fアンダースポイラ

  @ApiProperty()
  @IsString()
  f_glass: string; //Fガラス

  @ApiProperty()
  @IsString()
  roof: string; //ルーフ

  @ApiProperty()
  @IsString()
  r_glass: string; //Rガラス

  @ApiProperty()
  @IsString()
  trunk: string; //トランク

  @ApiProperty()
  @IsString()
  r_under_aero_parts: string; //Rアンダースポイラ

  @ApiProperty()
  @IsString()
  f_panel: string; //Fパネル

  @ApiProperty()
  @IsString()
  right_fender: string; //右フェンダー

  @ApiProperty()
  @IsString()
  right_door: string; //右ドア

  @ApiProperty()
  @IsString()
  right_locker_panel: string; //右ロッカーパネル

  @ApiProperty()
  @IsString()
  right_r_door: string; //右Rドア

  @ApiProperty()
  @IsString()
  right_quarter: string; //右クォーター

  @ApiProperty()
  @IsString()
  r_panel: string; //Rパネル
}
