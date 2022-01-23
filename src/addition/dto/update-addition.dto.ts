import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateAdditionDTO {
  //PS
  @ApiProperty({
    description: 'PS',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isPS: boolean;

  //PW
  @ApiProperty({
    description: 'PW',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isPW: boolean;

  //AW
  @ApiProperty({
    description: 'AW',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isAW: boolean;

  //SR
  @ApiProperty({
    description: 'SR',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isSR: boolean;

  //背面
  @ApiProperty({
    description: '背面',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isBACK: boolean;

  //カワ
  @ApiProperty({
    description: 'カワ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isPEEL: boolean;

  //AB
  @ApiProperty({
    description: 'AB',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isAB: boolean;

  //TV
  @ApiProperty({
    description: 'TV',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isTV: boolean;

  //ナビ
  @ApiProperty({
    description: 'ナビ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isNAVI: boolean;

  //Rスポ
  @ApiProperty({
    description: 'Rスポ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isRSP: boolean;

  //カセット
  @ApiProperty({
    description: 'カセット',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isCAS: boolean;
}
