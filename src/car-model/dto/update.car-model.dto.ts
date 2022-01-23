import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCarModelDTO {
  @ApiProperty({
    description: '車種名',
    default: 'ワゴンR',
  })
  @IsOptional()
  @IsString()
  name: string;
}
