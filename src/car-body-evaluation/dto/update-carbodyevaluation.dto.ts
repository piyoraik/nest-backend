import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCarBodyEvaluationDTO {
  @ApiProperty({
    description: '左Fタイヤ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_f_tire: string; //左Fタイヤ

  @ApiProperty({
    description: '左Rタイヤ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_r_tire: string; //左Rタイヤ

  @ApiProperty({
    description: '右Fタイヤ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  right_f_tire: string; //右Fタイヤ

  @ApiProperty({
    description: '右Rタイヤ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  right_r_tire: string; //右Rタイヤ

  @ApiProperty({
    description: 'スペアタイヤ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  spare_tire: string; //スペアタイヤ

  @ApiProperty({
    description: 'Fバンパー',
    default: '-',
  })
  @IsOptional()
  @IsString()
  f_bumper: string; //Fバンパー

  @ApiProperty({
    description: '左Fフェンダー',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_f_fender: string; //左Fフェンダー

  @ApiProperty({
    description: '左Fドア',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_f_door: string; //左Fドア

  @ApiProperty({
    description: '左ロッカーパネル',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_locker_panel: string; //左ロッカーパネル

  @ApiProperty({
    description: '左Rドア',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_r_door: string; //左Rドア

  @ApiProperty({
    description: '左クォーター',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_quarter: string; //左クォーター

  @ApiProperty({
    description: '左Rバンパー',
    default: '-',
  })
  @IsOptional()
  @IsString()
  left_r_bumper: string; //左Rバンパー

  @ApiProperty({
    description: 'ボンネット',
    default: '-',
  })
  @IsOptional()
  @IsString()
  bonnet: string; //ボンネット

  @ApiProperty({
    description: 'Fアンダースポイラ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  f_under_aero_parts: string; //Fアンダースポイラ

  @ApiProperty({
    description: 'Fガラス',
    default: '-',
  })
  @IsOptional()
  @IsString()
  f_glass: string; //Fガラス

  @ApiProperty({
    description: 'ルーフ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  roof: string; //ルーフ

  @ApiProperty({
    description: 'Rガラス',
    default: '-',
  })
  @IsOptional()
  @IsString()
  r_glass: string; //Rガラス

  @ApiProperty({
    description: 'トランク',
    default: '-',
  })
  @IsOptional()
  @IsString()
  trunk: string; //トランク

  @ApiProperty({
    description: 'Rアンダースポイラ',
    default: '-',
  })
  @IsOptional()
  @IsString()
  r_under_aero_parts: string; //Rアンダースポイラ

  @ApiProperty({
    description: 'Fパネル',
    default: '-',
  })
  @IsOptional()
  @IsString()
  f_panel: string; //Fパネル

  @ApiProperty({
    description: '右フェンダー',
    default: '-',
  })
  @IsOptional()
  @IsString()
  right_fender: string; //右フェンダー

  @ApiProperty({
    description: '右ドア',
    default: '-',
  })
  @IsOptional()
  @IsString()
  right_door: string; //右ドア

  @ApiProperty({
    description: '右ロッカーパネル',
    default: '-',
  })
  @IsOptional()
  @IsString()
  right_locker_panel: string; //右ロッカーパネル

  @ApiProperty({
    description: '右Rドア',
    default: '-',
  })
  @IsOptional()
  @IsString()
  right_r_door: string; //右Rドア

  @ApiProperty({
    description: '右クォーター',
    default: '-',
  })
  @IsOptional()
  @IsString()
  right_quarter: string; //右クォーター

  @ApiProperty({
    description: 'Rパネル',
    default: '-',
  })
  @IsOptional()
  @IsString()
  r_panel: string; //Rパネル
}
