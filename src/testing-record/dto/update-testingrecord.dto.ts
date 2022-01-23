import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTestingRecordDTO {
  @ApiProperty({
    description: '車ID',
    default: '-',
  })
  @IsOptional()
  @IsNumber()
  listingCarId: number; // 車ID

  @ApiProperty({
    description: '修復歴',
    default: '-',
  })
  @IsOptional()
  @IsString()
  repaired: string; //修復歴

  @ApiProperty({
    description: 'ジャッキ',
    default: 'あり',
  })
  @IsOptional()
  @IsString()
  jack: string; //ジャッキ

  @ApiProperty({
    description: '工具',
    default: 'あり',
  })
  @IsOptional()
  @IsString()
  tool: string; //工具

  @ApiProperty({
    description: '出品者記入テキスト',
    default: '-',
  })
  @IsOptional()
  @IsString()
  text: string; //出品者記入テキスト

  @ApiProperty({
    description: 'リサイクル料金',
    default: '120000',
  })
  @IsOptional()
  @IsString()
  recycling: number; //リサイクル料金
}
