import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCarBodyImageDTO {
  @ApiProperty({
    type: 'string',
    format: 'binary',
  })
  img: any;
}
