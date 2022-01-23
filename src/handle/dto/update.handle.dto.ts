import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateHandleDTO {
  @ApiProperty({
    description: 'ハンドル',
    default: '左ハンドル',
  })
  @IsOptional()
  @IsString()
  name: string;
}
