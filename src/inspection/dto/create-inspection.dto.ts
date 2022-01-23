import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateInspectionDTO {
  //キズ
  @ApiProperty({
    description: 'キズ',
    default: '-',
  })
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @ApiProperty({
    description: 'コゲ',
    default: '-',
  })
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @ApiProperty({
    description: 'コゲ穴',
    default: '-',
  })
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @ApiProperty({
    description: '汚れ',
    default: '-',
  })
  @IsBoolean()
  isSR: boolean;

  //破れ
  @ApiProperty({
    description: '破れ',
    default: '-',
  })
  @IsBoolean()
  isBACK: boolean;

  //A
  @ApiProperty({
    description: 'A',
    default: '-',
  })
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @ApiProperty({
    description: 'X要ス',
    default: '-',
  })
  @IsBoolean()
  isAB: boolean;
}
