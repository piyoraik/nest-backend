import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateFuelDTO {
  @ApiProperty({
    description: '燃料',
    default: 'ハイオクガソリン',
  })
  @IsString()
  name: string;
}
