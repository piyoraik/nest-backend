import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNotEmpty,
  IsDateString,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { AuctionColor } from 'src/enum/auctionColor.enum';

export class CreateAuctionDto {
  @ApiProperty({
    description: 'オークション名',
    default: ' オークション名',
  })
  @IsString()
  @IsNotEmpty()
  auctionName: string;

  @ApiProperty({
    description: 'オークションカラー',
    enum: AuctionColor,
  })
  @IsNotEmpty()
  @IsEnum(AuctionColor)
  auctionColor: AuctionColor;

  @ApiProperty({
    description: 'オークションのサブタイトル',
    default: 'オークションのサブタイトル',
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
    default: 'hoge.png',
  })
  @IsOptional()
  @IsString()
  selectionImg: string;
}
