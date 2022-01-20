import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsOptional } from "class-validator";
import { DeliveryMethod } from "src/enum/deliveryMethod.enum";
import { PaymentMethod } from "src/enum/paymentMethod.enum";

export class UpdatePurchaseManagementDTO {
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    option: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    sealCertificate: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    seal: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    residentsCard: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    vehicleInspection: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    LiabilityInsurance: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    commission: boolean;

    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    commissionReturn: boolean;

    @ApiProperty()
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
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    payment: boolean;
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    delivery: boolean;
    
    @ApiProperty()
    @IsOptional()
    @IsBoolean()
    cancel: boolean;
  
}