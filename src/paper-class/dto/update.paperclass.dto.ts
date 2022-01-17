import { IsBoolean, IsOptional } from 'class-validator';

export class CreatePaperClassDTO {
  @IsOptional()
  @IsBoolean()
  securityDocument: boolean; //新車保証書

  @IsOptional()
  @IsBoolean()
  manual: boolean; //取扱説明書
}
