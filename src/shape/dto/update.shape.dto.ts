import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateShapeDTO {
  @ApiProperty()
  @IsOptional()
  @IsString()
  name: string;
}
