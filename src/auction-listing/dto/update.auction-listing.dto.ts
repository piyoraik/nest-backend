import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateAuctionListingDTO {
  //落札価格
  @ApiProperty({
    description: '落札価格',
    default: 1200000,
  })
  @IsOptional()
  @IsNumber()
  hammerPrice: number;
}
