import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString } from 'class-validator';

export class CreateCarBodyEvaluationDTO {
  @ApiProperty({
    description: '左Fタイヤ',
    default: 'キズあり',
  })
  @IsString()
  left_f_tire: string; //左Fタイヤ

  @ApiProperty({
    description: '左Rタイヤ',
    default: '-',
  })
  @IsString()
  left_r_tire: string; //左Rタイヤ

  @ApiProperty({
    description: '右Fタイヤ',
    default: '-',
  })
  @IsString()
  right_f_tire: string; //右Fタイヤ

  @ApiProperty({
    description: '右Rタイヤ',
    default: '-',
  })
  @IsString()
  right_r_tire: string; //右Rタイヤ

  @ApiProperty({
    description: 'スペアタイヤ',
    default: '-',
  })
  @IsString()
  spare_tire: string; //スペアタイヤ

  @ApiProperty({
    description: 'Fバンパー',
    default: '-',
  })
  @IsString()
  f_bumper: string; //Fバンパー

  @ApiProperty({
    description: '左Fフェンダー',
    default: '-',
  })
  @IsString()
  left_f_fender: string; //左Fフェンダー

  @ApiProperty({
    description: '左Fドア',
    default: 'キズあり',
  })
  @IsString()
  left_f_door: string; //左Fドア

  @ApiProperty({
    description: '左ロッカーパネル',
    default: '-',
  })
  @IsString()
  left_locker_panel: string; //左ロッカーパネル

  @ApiProperty({
    description: '左Rドア',
    default: '-',
  })
  @IsString()
  left_r_door: string; //左Rドア

  @ApiProperty({
    description: '左クォーター',
    default: '-',
  })
  @IsString()
  left_quarter: string; //左クォーター

  @ApiProperty({
    description: '左Rバンパー',
    default: '-',
  })
  @IsString()
  left_r_bumper: string; //左Rバンパー

  @ApiProperty({
    description: 'ボンネット',
    default: '-',
  })
  @IsString()
  bonnet: string; //ボンネット

  @ApiProperty({
    description: 'Fアンダースポイラ',
    default: '-',
  })
  @IsString()
  f_under_aero_parts: string; //Fアンダースポイラ

  @ApiProperty({
    description: 'Fガラス',
    default: '-',
  })
  @IsString()
  f_glass: string; //Fガラス

  @ApiProperty({
    description: 'ルーフ',
    default: '-',
  })
  @IsString()
  roof: string; //ルーフ

  @ApiProperty({
    description: 'Rガラス',
    default: '-',
  })
  @IsString()
  r_glass: string; //Rガラス

  @ApiProperty({
    description: 'トランク',
    default: '-',
  })
  @IsString()
  trunk: string; //トランク

  @ApiProperty({
    description: 'Rアンダースポイラ',
    default: '-',
  })
  @IsString()
  r_under_aero_parts: string; //Rアンダースポイラ

  @ApiProperty({
    description: 'Fパネル',
    default: '-',
  })
  @IsString()
  f_panel: string; //Fパネル

  @ApiProperty({
    description: '右フェンダー',
    default: '-',
  })
  @IsString()
  right_fender: string; //右フェンダー

  @ApiProperty({
    description: '右ドア',
    default: '-',
  })
  @IsString()
  right_door: string; //右ドア

  @ApiProperty({
    description: '右ロッカーパネル',
    default: '-',
  })
  @IsString()
  right_locker_panel: string; //右ロッカーパネル

  @ApiProperty({
    description: '右Rドア',
    default: '-',
  })
  @IsString()
  right_r_door: string; //右Rドア

  @ApiProperty({
    description: '右クォーター',
    default: '-',
  })
  @IsString()
  right_quarter: string; //右クォーター

  @ApiProperty({
    description: 'Rパネル',
    default: '-',
  })
  @IsString()
  r_panel: string; //Rパネル
}
