import { IsString, IsNumber, IsDate, IsNotEmpty } from 'class-validator';

export class CreateAuctionDto {
  @IsString()
  @IsNotEmpty()
  auctionName: string;
  @IsNumber()
  @IsNotEmpty()
  colorId: number;
  @IsString()
  subTitle: string;
  @IsDate()
  @IsNotEmpty()
  startTime: Date;
  @IsString()
  selectionImg: string;
}
