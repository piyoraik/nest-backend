import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateInspectionDTO {
  //キズ
  @ApiProperty({
    description: 'キズ',
    default: false,
  })
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @ApiProperty({
    description: 'コゲ',
    default: false,
  })
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @ApiProperty({
    description: 'コゲ穴',
    default: false,
  })
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @ApiProperty({
    description: '汚れ',
    default: false,
  })
  @IsBoolean()
  isSR: boolean;

  //破れ
  @ApiProperty({
    description: '破れ',
    default: false,
  })
  @IsBoolean()
  isBACK: boolean;

  //A
  @ApiProperty({
    description: 'A',
    default: false,
  })
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @ApiProperty({
    description: 'X要ス',
    default: false,
  })
  @IsBoolean()
  isAB: boolean;
}
