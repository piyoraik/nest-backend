import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAirBackDTO {
  @ApiProperty({
    description: 'エアバック',
    default: 'シングル',
  })
  @IsString()
  name: string;
}
