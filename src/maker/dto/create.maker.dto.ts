import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMakerDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
