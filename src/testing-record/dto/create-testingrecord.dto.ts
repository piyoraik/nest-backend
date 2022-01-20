import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTestingRecordDTO {
  @ApiProperty()
  @IsString()
  repaired: string; //修復歴

  @ApiProperty()
  @IsString()
  jack: string; //ジャッキ

  @ApiProperty()
  @IsString()
  tool: string; //工具

  @ApiProperty()
  @IsString()
  text: string; //出品者記入テキスト

  @ApiProperty()
  @IsNumber()
  recycling: number; //リサイクル料金
}
