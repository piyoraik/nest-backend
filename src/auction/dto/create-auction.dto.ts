import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateAuctionDto {
  @ApiProperty({
    description: 'オークション名',
  })
  @IsString()
  @IsNotEmpty()
  auctionName: string;

  @ApiProperty({
    description: '廃止予定',
  })
  @IsNumber()
  @IsNotEmpty()
  colorId: number;

  @ApiProperty({
    description: 'オークションのサブタイトル',
  })
  @IsString()
  subTitle: string;

  @ApiProperty({
    description: 'オークションの開始時間',
  })
  @IsDateString()
  @IsNotEmpty()
  startTime: Date;

  @ApiProperty({
    description: 'オークションで使用する画像',
  })
  @IsOptional()
  @IsString()
  selectionImg: string;
}
