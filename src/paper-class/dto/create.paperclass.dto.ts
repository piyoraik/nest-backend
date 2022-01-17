import { IsBoolean } from 'class-validator';

export class CreatePaperClassDTO {
  @IsBoolean()
  securityDocument: boolean; //新車保証書

  @IsBoolean()
  manual: boolean; //取扱説明書
}
