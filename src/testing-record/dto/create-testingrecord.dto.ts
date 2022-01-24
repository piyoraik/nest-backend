import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateTestingRecordDTO {
  @ApiProperty({
    description: '修復歴',
    default: '-',
  })
  @IsString()
  repaired: string; //修復歴

  @ApiProperty({
    description: 'ジャッキ',
    default: 'あり',
  })
  @IsString()
  jack: string; //ジャッキ

  @ApiProperty({
    description: '工具',
    default: 'あり',
  })
  @IsString()
  tool: string; //工具

  @ApiProperty({
    description: '出品者記入テキスト',
    default: '-',
  })
  @IsString()
  text: string; //出品者記入テキスト

  @ApiProperty({
    description: 'リサイクル料金',
    default: 120000,
  })
  @IsNumber()
  recycling: number; //リサイクル料金
}
