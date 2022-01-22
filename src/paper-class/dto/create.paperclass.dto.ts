import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreatePaperClassDTO {
  @ApiProperty()
  @IsBoolean()
  securityDocument: boolean; //新車保証書

  @ApiProperty()
  @IsBoolean()
  manual: boolean; //取扱説明書
}
