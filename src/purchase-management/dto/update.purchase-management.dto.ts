import { ApiProperty } from '@nestjs/swagger';
import { IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdatePurchaseManagementDTO {
  //仕入れ日
  @ApiProperty({
    description: '仕入れ日',
  })
  @IsOptional()
  @IsDateString()
  purchaseData: Date;

  //仕入れ先
  @ApiProperty({
    description: '仕入れ先',
    default: 'HAL自動車代理店',
  })
  @IsOptional()
  @IsString()
  supplier: string;

  //仕入金額
  @ApiProperty({
    description: '仕入金額',
    default: 300000,
  })
  @IsOptional()
  @IsNumber()
  purchaseAmount: number;

  //経費
  @ApiProperty({
    description: '経費',
    default: 30000,
  })
  @IsOptional()
  @IsNumber()
  expense: number;

  //名変期限
  @ApiProperty({
    description: '名変期限',
  })
  @IsOptional()
  @IsDateString()
  nameStrangePeriod: Date;

  //備考
  @ApiProperty({
    description: '備考',
    default: '特になし',
  })
  @IsOptional()
  @IsString()
  note: string;

  //仕入原価
  @ApiProperty({
    description: '仕入原価',
    default: 250000,
  })
  @IsOptional()
  @IsNumber()
  purchasingCost: number;

  //消費税
  @ApiProperty({
    description: '消費税',
    default: 25000,
  })
  @IsOptional()
  @IsNumber()
  tax: number;

  //売上日
  @ApiProperty({
    description: '売上日',
  })
  @IsOptional()
  @IsDateString()
  salesDate: Date;

  //売上先
  @ApiProperty({
    description: '売上先',
    default: 'モードモータース',
  })
  @IsOptional()
  @IsString()
  salesTarget: string;

  //担当
  @ApiProperty({
    description: '担当',
    default: '河田',
  })
  @IsOptional()
  @IsString()
  rep: string;

  //売上
  @ApiProperty({
    description: '売上',
    default: 120000,
  })
  @IsOptional()
  @IsNumber()
  sales: number;

  //手数料
  @ApiProperty({
    description: '手数料',
    default: 20000,
  })
  @IsOptional()
  @IsNumber()
  fee: number;

  //売上合計
  @ApiProperty({
    description: '売上合計',
    default: 400000,
  })
  @IsOptional()
  @IsNumber()
  salesTotal: number;

  //純利益
  @ApiProperty({
    description: '純利益',
    default: 50000,
  })
  @IsOptional()
  @IsNumber()
  netProfit: number;

  //自税預
  @ApiProperty({
    description: '自税預',
    default: 10000,
  })
  @IsOptional()
  @IsNumber()
  selfTax: number;

  //名変更日
  @ApiProperty({
    description: '名変更日',
  })
  @IsOptional()
  @IsDateString()
  nameChangeDate: Date;
}
