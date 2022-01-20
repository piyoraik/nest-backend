import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAirConditionerDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
