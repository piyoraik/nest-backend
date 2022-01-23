import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHandleDTO {
  @ApiProperty({
    description: 'ハンドル',
    default: '左ハンドル',
  })
  @IsString()
  name: string;
}
