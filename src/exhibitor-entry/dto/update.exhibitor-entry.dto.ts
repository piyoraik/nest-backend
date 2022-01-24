import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExhibitorEntryDTO {
  @ApiProperty({
    description: '修復歴',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  repairHistory: boolean;

  @ApiProperty({
    description: 'ジャッキ',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  jack: boolean;

  @ApiProperty({
    description: '工具',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  tool: boolean;

  @ApiProperty({
    description: 'テキスト',
    default: '-',
  })
  @IsOptional()
  @IsString()
  text: string;

  @ApiProperty({
    description: 'リサイクル料金',
    default: '300000',
  })
  @IsOptional()
  @IsNumber()
  recyclePrice: number;
}
