import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean } from 'class-validator';

export class CreatePaperClassDTO {
  @ApiProperty({
    description: '新車保証書',
    default: false,
  })
  @IsBoolean()
  securityDocument: boolean; //新車保証書

  @ApiProperty({
    description: '取扱説明書',
    default: false,
  })
  @IsBoolean()
  manual: boolean; //取扱説明書
}
