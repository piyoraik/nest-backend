import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePriceDTO {
  @ApiProperty()
  @IsNumber()
  successfulBidPrice: number;

  @ApiProperty()
  @IsNumber()
  successfulBidCommission: number;

  @ApiProperty()
  @IsNumber()
  useCommission: number;

  @ApiProperty()
  @IsNumber()
  consumptionTax: number;

  @ApiProperty()
  @IsNumber()
  deliveryCommission: number;
}
