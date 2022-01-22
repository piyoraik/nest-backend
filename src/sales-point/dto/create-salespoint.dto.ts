import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSalesPointDTO {
  @ApiProperty({
    description: 'セールスポイント',
    default: 'セールスポイント',
  })
  @IsString()
  point: string;
}
