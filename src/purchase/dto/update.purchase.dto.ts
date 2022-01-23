import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum, IsOptional } from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class CreatePurchaseDTO {
  @ApiProperty({
    description: 'オプションの有無',
    default: 'あり',
  })
  @IsOptional()
  @IsBoolean()
  option: boolean;

  @ApiProperty({
    description: '印鑑証明書',
    default: 'あり',
  })
  @IsOptional()
  @IsBoolean()
  sealCertificate: boolean;

  @ApiProperty({
    description: '印鑑',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  seal: boolean;

  @ApiProperty({
    description: '住民票',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  residentsCard: boolean;

  @ApiProperty({
    description: '自動車検査書',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  vehicleInspection: boolean;

  @ApiProperty({
    description: '自賠責保険証',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  LiabilityInsurance: boolean;

  @ApiProperty({
    description: '委任状',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  commission: boolean;

  @ApiProperty({
    description: '委任状(返)',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  commissionReturn: boolean;

  @ApiProperty({
    description: '車庫証明書',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  garageCertificate: boolean;

  @ApiProperty({
    enum: DeliveryMethod,
  })
  @IsOptional()
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  @ApiProperty({
    enum: PaymentMethod,
  })
  @IsOptional()
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({
    description: '入金',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  payment: boolean;

  @ApiProperty({
    description: '納品',
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  delivery: boolean;

  @ApiProperty({
    description: 'キャンセル',
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  cancel: boolean;
}
