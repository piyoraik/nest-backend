import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateFuelDTO {
  @ApiProperty({
    description: '燃料',
    default: 'ハイオクガソリン',
  })
  @IsOptional()
  @IsString()
  name: string;
}
