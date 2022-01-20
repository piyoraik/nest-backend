import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateImportedCarDTO {
  @ApiProperty()
  @IsString()
  name: string;
}
