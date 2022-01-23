import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateInspectionDTO {
  //キズ
  @ApiProperty({
    description: 'キズ',
    default: '-',
  })
  @IsOptional()
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @ApiProperty({
    description: 'コゲ',
    default: '-',
  })
  @IsOptional()
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @ApiProperty({
    description: 'コゲ穴',
    default: '-',
  })
  @IsOptional()
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @ApiProperty({
    description: '汚れ',
    default: '-',
  })
  @IsOptional()
  @IsBoolean()
  isSR: boolean;

  //破れ
  @ApiProperty({
    description: '破れ',
    default: '-',
  })
  @IsOptional()
  @IsBoolean()
  isBACK: boolean;

  //A
  @ApiProperty({
    description: 'A',
    default: '-',
  })
  @IsOptional()
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @ApiProperty({
    description: 'X要ス',
    default: '-',
  })
  @IsOptional()
  @IsBoolean()
  isAB: boolean;
}
