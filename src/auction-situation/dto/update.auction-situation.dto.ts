import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdateAuctionSituationDTO {
  @ApiProperty({
    description: '入札価格',
    default: 1500000,
  })
  @IsOptional()
  @IsNumber()
  bidPrice: number;
}
