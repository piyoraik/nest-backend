import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class UpdateAuctionDto {
  @ApiProperty({
    description: 'オークション名',
  })
  @IsOptional()
  @IsString()
  auctionName: string;

  @ApiProperty({
    description: '廃止予定',
  })
  @IsOptional()
  @IsNumber()
  colorId: number;

  @ApiProperty({
    description: 'オークションのサブタイトル',
  })
  @IsOptional()
  @IsString()
  subTitle: string;

  @ApiProperty({
    description: 'オークションの開始時間',
  })
  @IsOptional()
  @IsDate()
  startTime: Date;

  @ApiProperty({
    description: 'オークションで使用する画像',
  })
  @IsOptional()
  @IsString()
  selectionImg: string;
}
