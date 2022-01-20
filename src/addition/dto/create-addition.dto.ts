import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateAdditionDTO {
  //PS
  @ApiProperty()
  @IsBoolean()
  isPS: boolean;

  //PW
  @ApiProperty()
  @IsBoolean()
  isPW: boolean;

  //AW
  @ApiProperty()
  @IsBoolean()
  isAW: boolean;

  //SR
  @ApiProperty()
  @IsBoolean()
  isSR: boolean;

  //背面
  @ApiProperty()
  @IsBoolean()
  isBACK: boolean;

  //カワ
  @ApiProperty()
  @IsBoolean()
  isPEEL: boolean;

  //AB
  @ApiProperty()
  @IsBoolean()
  isAB: boolean;

  //TV
  @ApiProperty()
  @IsBoolean()
  isTV: boolean;

  //ナビ
  @ApiProperty()
  @IsBoolean()
  isNAVI: boolean;

  //Rスポ
  @ApiProperty()
  @IsBoolean()
  isRSP: boolean;

  //カセット
  @ApiProperty()
  @IsBoolean()
  isCAS: boolean;
}
