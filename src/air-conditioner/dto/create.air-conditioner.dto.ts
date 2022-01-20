import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAirConditionerDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
