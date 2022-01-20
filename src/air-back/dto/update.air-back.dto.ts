import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAirBackDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
