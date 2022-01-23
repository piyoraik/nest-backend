import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsEnum, IsDateString } from 'class-validator';
import { AuctionColor } from 'src/enum/auctionColor.enum';

export class UpdateAuctionDto {
  @ApiProperty({
    description: 'オークション名',
    default: ' オークション名',
  })
  @IsOptional()
  @IsString()
  auctionName: string;

  @ApiProperty({
    description: 'オークションカラー',
    enum: AuctionColor,
  })
  @IsEnum(AuctionColor)
  @IsOptional()
  auctionColor: AuctionColor;

  @ApiProperty({
    description: 'オークションのサブタイトル',
    default: 'オークションのサブタイトル',
  })
  @IsOptional()
  @IsString()
  subTitle: string;

  @ApiProperty({
    description: 'オークションの開始時間',
  })
  @IsOptional()
  @IsDateString()
  startTime: Date;

  @ApiProperty({
    description: 'オークションで使用する画像',
    default: 'hoge.png',
  })
  @IsOptional()
  @IsString()
  selectionImg: string;
}
