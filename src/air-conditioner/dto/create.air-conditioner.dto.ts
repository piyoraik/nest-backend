import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateAirConditionerDTO {
  @ApiProperty({
    description: 'エアコン',
    default: 'AC',
  })
  @IsString()
  name: string;
}
