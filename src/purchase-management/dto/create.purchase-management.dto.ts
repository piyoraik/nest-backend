import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsEnum } from 'class-validator';
import { DeliveryMethod } from 'src/enum/deliveryMethod.enum';
import { PaymentMethod } from 'src/enum/paymentMethod.enum';

export class CreatePurchaseManagementDTO {
  @ApiProperty()
  @IsBoolean()
  option: boolean;

  @ApiProperty()
  @IsBoolean()
  sealCertificate: boolean;

  @ApiProperty()
  @IsBoolean()
  seal: boolean;

  @ApiProperty()
  @IsBoolean()
  residentsCard: boolean;

  @ApiProperty()
  @IsBoolean()
  vehicleInspection: boolean;

  @ApiProperty()
  @IsBoolean()
  LiabilityInsurance: boolean;

  @ApiProperty()
  @IsBoolean()
  commission: boolean;

  @ApiProperty()
  @IsBoolean()
  commissionReturn: boolean;

  @ApiProperty()
  @IsBoolean()
  garageCertificate: boolean;

  @ApiProperty({
    enum: DeliveryMethod,
  })
  @IsEnum(DeliveryMethod)
  deliveryMethod: DeliveryMethod;

  @ApiProperty({
    enum: PaymentMethod,
  })
  @IsEnum(PaymentMethod)
  paymentMethod: PaymentMethod;

  @ApiProperty()
  @IsBoolean()
  payment: boolean;

  @ApiProperty()
  @IsBoolean()
  delivery: boolean;

  @ApiProperty()
  @IsBoolean()
  cancel: boolean;
}
