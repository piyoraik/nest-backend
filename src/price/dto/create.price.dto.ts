import { ApiProperty } from '@nestjs/swagger';
import { IsNumber } from 'class-validator';

export class CreatePriceDTO {
  @ApiProperty({
    description: '落札価格',
    default: '500000',
  })
  @IsNumber()
  successfulBidPrice: number;

  @ApiProperty({
    description: '落札手数料',
    default: '50000',
  })
  @IsNumber()
  successfulBidCommission: number;

  @ApiProperty({
    description: '利用手数料',
    default: '3000',
  })
  @IsNumber()
  useCommission: number;

  @ApiProperty({
    description: '消費税',
    default: '50000',
  })
  @IsNumber()
  consumptionTax: number;

  @ApiProperty({
    description: '配送手数料',
    default: '5000',
  })
  @IsNumber()
  deliveryCommission: number;
}
