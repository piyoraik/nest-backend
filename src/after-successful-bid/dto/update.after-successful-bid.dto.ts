import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { CarOption } from 'src/enum/option.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class UpdateAfterSuccessfulBidDTO {
  //オプション ＊変更
  @ApiProperty()
  @IsOptional()
  @IsEnum(CarOption)
  option: CarOption;

  //配送
  @ApiProperty()
  @IsOptional()
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  //フェリー
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isFerry: boolean;

  //支払い方法 ＊変更
  @ApiProperty()
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  //入金
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isPayment: boolean;

  //納品
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isDelivery: boolean;

  //キャンセル
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  isCancelled: boolean;
}
