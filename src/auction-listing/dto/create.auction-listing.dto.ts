import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateAuctionListingDTO {
  //落札価格
  @ApiProperty({
    description: '落札価格',
    default: 1200000,
  })
  @IsNumber()
  hammerPrice: number;
}
