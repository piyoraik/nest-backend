import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateAirConditionerDTO {
  @ApiProperty({
    description: 'エアコン',
    default: 'AC',
  })
  @IsOptional()
  @IsString()
  name: string;
}
