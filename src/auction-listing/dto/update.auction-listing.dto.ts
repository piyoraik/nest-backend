import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class CreateAuctionListingDTO {
  //落札価格
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  hammerPrice: number;
}
