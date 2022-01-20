import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateColorDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
