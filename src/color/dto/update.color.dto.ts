import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateColorDTO {
  @ApiProperty({
    description: '色',
    default: 'FF0000',
  })
  @IsOptional()
  @IsString()
  name: string;
}
