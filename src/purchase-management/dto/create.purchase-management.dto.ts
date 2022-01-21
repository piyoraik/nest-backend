import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class CreatePurchaseManagementDTO {
  //仕入れ日
  @ApiProperty()
  @IsDateString()
  purchaseData: Date;

  //仕入れ先
  @ApiProperty()
  @IsString()
  supplier: string;

  //仕入金額
  @ApiProperty()
  @IsNumber()
  purchaseAmount: number;

  //
  @ApiProperty()
  @IsNumber()
  expense: number;

  //名変期限
  @ApiProperty()
  @IsDateString()
  nameStrangePeriod: Date;

  //備考
  @ApiProperty()
  @IsString()
  note: string;

  //仕入原価
  @ApiProperty()
  @IsNumber()
  purchasingCost: number;

  //消費税
  @ApiProperty()
  @IsNumber()
  tax: number;

  //売上日
  @ApiProperty()
  @IsDateString()
  salesDate: Date;

  //売上先
  @ApiProperty()
  @IsString()
  salesTarget: string;

  //担当
  @ApiProperty()
  @IsString()
  rep: string;

  //売上
  @ApiProperty()
  @IsNumber()
  sales: number;

  //手数料
  @ApiProperty()
  @IsNumber()
  fee: number;

  //売上合計
  @ApiProperty()
  @IsNumber()
  salesTotal: number;

  //純利益
  @ApiProperty()
  @IsNumber()
  netProfit: number;

  //自税預
  @ApiProperty()
  @IsNumber()
  selfTax: number;

  //名変更日
  @ApiProperty()
  @IsDateString()
  nameChangeDate: Date;
}
