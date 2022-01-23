import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateExhibitorEntryDTO {
  @ApiProperty({
    description: '修復歴',
    default: '-',
  })
  @IsBoolean()
  repairHistory: boolean;

  @ApiProperty({
    description: 'ジャッキ',
    default: 'あり',
  })
  @IsBoolean()
  jack: boolean;

  @ApiProperty({
    description: '工具',
    default: 'あり',
  })
  @IsBoolean()
  tool: boolean;

  @ApiProperty({
    description: 'テキスト',
    default: '-',
  })
  @IsString()
  text: string;

  @ApiProperty({
    description: 'リサイクル料金',
    default: '300000',
  })
  @IsNumber()
  recyclePrice: number;
}
