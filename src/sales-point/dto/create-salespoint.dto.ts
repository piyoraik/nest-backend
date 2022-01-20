import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateSalesPointDTO {
  @ApiProperty()
  @IsString()
  point: string;
}
