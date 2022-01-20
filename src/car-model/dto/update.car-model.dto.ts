import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCarModelDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
