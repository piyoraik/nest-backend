import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateHandleDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
