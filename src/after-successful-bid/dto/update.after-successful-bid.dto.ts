import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { CarOption } from 'src/enum/option.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class UpdateAfterSuccessfulBidDTO {
  //オプション
  @ApiProperty({
    enum: CarOption,
    description: 'オプション',
  })
  @IsOptional()
  @IsEnum(CarOption)
  option: CarOption;

  //配送
  @ApiProperty({
    enum: DeliveryMethod,
    description: '配送',
  })
  @IsOptional()
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  //フェリー
  @ApiProperty({
    description: 'フェリーを使うかどうか',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isFerry: boolean;

  //支払い方法
  @ApiProperty({
    enum: PaymentMethod,
    description: '支払い方法',
  })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  //入金
  @ApiProperty({
    description: '入金',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isPayment: boolean;

  //納品
  @ApiProperty({
    description: '納品',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isDelivery: boolean;

  //キャンセル
  @ApiProperty({
    description: 'キャンセル',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  isCancelled: boolean;
}
