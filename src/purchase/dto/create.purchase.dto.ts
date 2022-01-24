import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum } from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class CreatePurchaseDTO {
  @ApiProperty({
    description: 'オプションの有無',
    default: true,
  })
  @IsBoolean()
  option: boolean;

  @ApiProperty({
    description: '印鑑証明書',
    default: true,
  })
  @IsBoolean()
  sealCertificate: boolean;

  @ApiProperty({
    description: '印鑑',
    default: true,
  })
  @IsBoolean()
  seal: boolean;

  @ApiProperty({
    description: '住民票',
    default: true,
  })
  @IsBoolean()
  residentsCard: boolean;

  @ApiProperty({
    description: '自動車検査書',
    default: true,
  })
  @IsBoolean()
  vehicleInspection: boolean;

  @ApiProperty({
    description: '自賠責保険証',
    default: true,
  })
  @IsBoolean()
  LiabilityInsurance: boolean;

  @ApiProperty({
    description: '委任状',
    default: true,
  })
  @IsBoolean()
  commission: boolean;

  @ApiProperty({
    description: '委任状(返)',
    default: true,
  })
  @IsBoolean()
  commissionReturn: boolean;

  @ApiProperty({
    description: '車庫証明書',
    default: true,
  })
  @IsBoolean()
  garageCertificate: boolean;

  @ApiProperty({
    description: '配送方法',
    enum: DeliveryMethod,
  })
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  @ApiProperty({
    description: '支払い方法',
    enum: PaymentMethod,
  })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty({
    description: '入金',
    default: true,
  })
  @IsBoolean()
  payment: boolean;

  @ApiProperty({
    description: '納品',
    default: true,
  })
  @IsBoolean()
  delivery: boolean;

  @ApiProperty({
    description: 'キャンセル',
    default: false,
  })
  @IsBoolean()
  cancel: boolean;
}
