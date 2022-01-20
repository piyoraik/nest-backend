import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMakerDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
