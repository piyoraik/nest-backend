import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateAdditionDTO {
  //PS
  @ApiProperty({
    description: 'PS',
    default: true,
  })
  @IsBoolean()
  isPS: boolean;

  //PW
  @ApiProperty({
    description: 'PW',
    default: true,
  })
  @IsBoolean()
  isPW: boolean;

  //AW
  @ApiProperty({
    description: 'AW',
    default: true,
  })
  @IsBoolean()
  isAW: boolean;

  //SR
  @ApiProperty({
    description: 'SR',
    default: true,
  })
  @IsBoolean()
  isSR: boolean;

  //背面
  @ApiProperty({
    description: '背面',
    default: true,
  })
  @IsBoolean()
  isBACK: boolean;

  //カワ
  @ApiProperty({
    description: 'カワ',
    default: true,
  })
  @IsBoolean()
  isPEEL: boolean;

  //AB
  @ApiProperty({
    description: 'AB',
    default: true,
  })
  @IsBoolean()
  isAB: boolean;

  //TV
  @ApiProperty({
    description: 'TV',
    default: true,
  })
  @IsBoolean()
  isTV: boolean;

  //ナビ
  @ApiProperty({
    description: 'ナビ',
    default: true,
  })
  @IsBoolean()
  isNAVI: boolean;

  //Rスポ
  @ApiProperty({
    description: 'Rスポ',
    default: true,
  })
  @IsBoolean()
  isRSP: boolean;

  //カセット
  @ApiProperty({
    description: 'カセット',
    default: true,
  })
  @IsBoolean()
  isCAS: boolean;
}
