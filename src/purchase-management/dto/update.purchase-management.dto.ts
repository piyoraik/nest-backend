import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class UpdatePurchaseManagementDTO {
  //仕入れ日
  @ApiProperty()
  @IsOptional()
  @IsDate()
  purchaseData: Date;

  //仕入れ先
  @ApiProperty()
  @IsOptional()
  @IsString()
  supplier: string;

  //仕入金額
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  purchaseAmount: number;

  //
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  expense: number;

  //名変期限
  @ApiProperty()
  @IsOptional()
  @IsDate()
  nameStrangePeriod: Date;

  //備考
  @ApiProperty()
  @IsOptional()
  @IsString()
  note: string;

  //仕入原価
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  purchasingCost: number;

  //消費税
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  tax: number;

  //売上日
  @ApiProperty()
  @IsOptional()
  @IsDate()
  salesDate: Date;

  //売上先
  @ApiProperty()
  @IsOptional()
  @IsString()
  salesTarget: string;

  //担当
  @ApiProperty()
  @IsOptional()
  @IsString()
  rep: string;

  //売上
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  sales: number;

  //手数料
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  fee: number;

  //売上合計
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  salesTotal: number;

  //純利益
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  netProfit: number;

  //自税預
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  selfTax: number;

  //名変更日
  @ApiProperty()
  @IsOptional()
  @IsDate()
  nameChangeDate: Date;
}
