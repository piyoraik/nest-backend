import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional } from 'class-validator';

export class UpdatePriceDTO {
  @ApiProperty({
    description: '落札価格',
    default: '500000',
  })
  @IsOptional()
  @IsNumber()
  successfulBidPrice: number;

  @ApiProperty({
    description: '落札手数料',
    default: '50000',
  })
  @IsOptional()
  @IsNumber()
  successfulBidCommission: number;

  @ApiProperty({
    description: '利用手数料',
    default: '3000',
  })
  @IsOptional()
  @IsNumber()
  useCommission: number;

  @ApiProperty({
    description: '消費税',
    default: '500000',
  })
  @IsOptional()
  @IsNumber()
  consumptionTax: number;

  @ApiProperty({
    description: '配送手数料',
    default: '5000',
  })
  @IsOptional()
  @IsNumber()
  deliveryCommission: number;
}
