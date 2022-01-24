import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateSalesPointDTO {
  @ApiProperty({
    description: 'セールスポイント',
    default: 'セールスポイント',
  })
  @IsOptional()
  @IsString()
  point: string;
}
