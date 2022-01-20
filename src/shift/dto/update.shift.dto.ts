import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateShiftDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
