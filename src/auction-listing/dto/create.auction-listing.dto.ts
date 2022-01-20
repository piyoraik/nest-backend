import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateAuctionListingDTO {
  //落札価格
  @ApiProperty()
  @IsNumber()
  hammerPrice: number;
}
