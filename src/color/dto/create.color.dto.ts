import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateColorDTO {
  @ApiProperty({
    description: '色',
    default: 'FF0000',
  })
  @IsString()
  name: string;
}
