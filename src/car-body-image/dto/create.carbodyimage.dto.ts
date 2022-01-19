import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCarBodyImageDTO {
  @ApiProperty()
  @IsString()
  img: string;
}
