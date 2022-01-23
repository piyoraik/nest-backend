import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateInspectionDTO {
  //キズ
  @ApiProperty({
    description: 'キズ',
    default: true,
  })
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @ApiProperty({
    description: 'コゲ',
    default: true,
  })
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @ApiProperty({
    description: 'コゲ穴',
    default: true,
  })
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @ApiProperty({
    description: '汚れ',
    default: true,
  })
  @IsBoolean()
  isSR: boolean;

  //破れ
  @ApiProperty({
    description: '破れ',
    default: true,
  })
  @IsBoolean()
  isBACK: boolean;

  //A
  @ApiProperty({
    description: 'A',
    default: true,
  })
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @ApiProperty({
    description: 'X要ス',
    default: true,
  })
  @IsBoolean()
  isAB: boolean;
}
