import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateExhibitorEntryDTO {
  @ApiProperty({
    description: '修復歴',
    default: true,
  })
  @IsBoolean()
  repairHistory: boolean;

  @ApiProperty({
    description: 'ジャッキ',
    default: true,
  })
  @IsBoolean()
  jack: boolean;

  @ApiProperty({
    description: '工具',
    default: true,
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
