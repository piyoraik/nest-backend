import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateGearDTO {
  @ApiProperty({
    description: 'ギア',
    default: 'AT',
  })
  @IsString()
  name: string;
}
