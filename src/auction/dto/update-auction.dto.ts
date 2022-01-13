import { IsString, IsNumber, IsDate, IsOptional } from 'class-validator';

export class UpdateAuctionDto {
  @IsOptional()
  @IsString()
  auctionName: string;

  @IsOptional()
  @IsNumber()
  colorId: number;

  @IsOptional()
  @IsString()
  subTitle: string;

  @IsOptional()
  @IsDate()
  startTime: Date;

  @IsOptional()
  @IsString()
  selectionImg: string;
}
