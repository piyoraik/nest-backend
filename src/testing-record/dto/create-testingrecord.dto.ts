import { IsString } from 'class-validator';

export class CreateTestingRecord {
  @IsString()
  repaired: string; //修復歴

  @IsString()
  jack: string; //ジャッキ

  @IsString()
  tool: string; //工具

  @IsString()
  text: string; //出品者記入テキスト

  @IsString()
  recycling: number; //リサイクル料金
}
