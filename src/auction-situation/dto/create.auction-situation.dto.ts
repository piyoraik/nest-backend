import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreateAuctionSituationDTO {
  @ApiProperty({
    description: '入札価格',
    default: 1500000,
  })
  @IsNumber()
  bidPrice: number;
}
