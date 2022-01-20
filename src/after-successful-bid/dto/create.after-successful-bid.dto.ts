import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum } from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { CarOption } from 'src/enum/option.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class CreateAfterSuccessfulBidDTO {
  //オプション ＊変更
  @ApiProperty()
  @IsEnum(CarOption)
  option: CarOption;

  //配送
  @ApiProperty()
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  //フェリー
  @ApiProperty()
  @IsBoolean()
  isFerry: boolean;

  //支払い方法 ＊変更
  @ApiProperty()
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  //入金
  @ApiProperty()
  @IsBoolean()
  isPayment: boolean;

  //納品
  @ApiProperty()
  @IsBoolean()
  isDelivery: boolean;

  //キャンセル
  @ApiProperty()
  @IsBoolean()
  isCancelled: boolean;
}
