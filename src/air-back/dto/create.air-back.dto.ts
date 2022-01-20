import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAirBackDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
