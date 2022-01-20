import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreateInspectionDTO {
  //キズ
  @ApiProperty()
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @ApiProperty()
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @ApiProperty()
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @ApiProperty()
  @IsBoolean()
  isSR: boolean;

  //破れ
  @ApiProperty()
  @IsBoolean()
  isBACK: boolean;

  //A
  @ApiProperty()
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @ApiProperty()
  @IsBoolean()
  isAB: boolean;
}
