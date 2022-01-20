import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateGearDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
