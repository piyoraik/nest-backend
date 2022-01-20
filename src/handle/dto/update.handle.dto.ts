import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateHandleDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
