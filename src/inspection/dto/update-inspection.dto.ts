import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateInspectionDTO {
  //キズ
  @ApiProperty({
    description: 'キズ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @ApiProperty({
    description: 'コゲ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @ApiProperty({
    description: 'コゲ穴',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @ApiProperty({
    description: '汚れ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isSR: boolean;

  //破れ
  @ApiProperty({
    description: '破れ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isBACK: boolean;

  //A
  @ApiProperty({
    description: 'A',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @ApiProperty({
    description: 'X要ス',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isAB: boolean;
}
