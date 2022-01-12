import { IsString, IsNumber, IsNotEmpty, IsDateString } from 'class-validator';

export class CreateAuctionDto {
  @IsString()
  @IsNotEmpty()
  auctionName: string;
  @IsNumber()
  @IsNotEmpty()
  colorId: number;
  @IsString()
  subTitle: string;
  @IsDateString()
  @IsNotEmpty()
  startTime: Date;
  @IsString()
  selectionImg: string;
}
