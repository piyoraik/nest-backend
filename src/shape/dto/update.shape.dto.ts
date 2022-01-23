import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateShapeDTO {
  @ApiProperty({
    description: '形状',
    default: '軽自動車',
  })
  @IsOptional()
  @IsString()
  name: string;
}
