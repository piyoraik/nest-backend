import { IsBoolean } from 'class-validator';

export class CreateInspectionDTO {
  //キズ
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @IsBoolean()
  isSR: boolean;

  //破れ
  @IsBoolean()
  isBACK: boolean;

  //A
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @IsBoolean()
  isAB: boolean;
}
