import { IsBoolean, IsOptional } from 'class-validator';

export class UpdateInspectionDTO {
  //キズ
  @IsOptional()
  @IsBoolean()
  isPS: boolean;

  //コゲ
  @IsOptional()
  @IsBoolean()
  isPW: boolean;

  //コゲ穴
  @IsOptional()
  @IsBoolean()
  isAW: boolean;

  //汚れ
  @IsOptional()
  @IsBoolean()
  isSR: boolean;

  //破れ
  @IsOptional()
  @IsBoolean()
  isBACK: boolean;

  //A
  @IsOptional()
  @IsBoolean()
  isPEEL: boolean;

  //X要ス
  @IsOptional()
  @IsBoolean()
  isAB: boolean;
}
