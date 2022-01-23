import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateGearDTO {
  @ApiProperty({
    description: 'ギア',
    default: 'AT',
  })
  @IsOptional()
  @IsString()
  name: string;
}
