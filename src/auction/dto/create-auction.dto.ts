import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsDateString,
  IsOptional,
} from 'class-validator';

export class CreateAuctionDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  auctionName: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  colorId: number;

  @ApiProperty()
  @IsString()
  subTitle: string;

  @ApiProperty()
  @IsDateString()
  @IsNotEmpty()
  startTime: Date;

  @IsOptional()
  @IsString()
  selectionImg: string;
}
