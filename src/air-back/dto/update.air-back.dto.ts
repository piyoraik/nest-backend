import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAirBackDTO {
  @ApiProperty({
    description: 'エアバック',
    default: 'シングル',
  })
  @IsOptional()
  @IsString()
  name: string;
}
