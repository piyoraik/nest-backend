import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCarModelDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
