import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateShiftDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
