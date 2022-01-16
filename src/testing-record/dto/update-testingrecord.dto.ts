import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTestingRecordDTO {
  @IsNumber()
  listingCarId: number; // 車ID

  @IsOptional()
  @IsString()
  repaired: string; //修復歴

  @IsOptional()
  @IsString()
  jack: string; //ジャッキ

  @IsOptional()
  @IsString()
  tool: string; //工具

  @IsOptional()
  @IsString()
  text: string; //出品者記入テキスト

  @IsOptional()
  @IsString()
  recycling: number; //リサイクル料金
}
