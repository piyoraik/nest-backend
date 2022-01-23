import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateShiftDTO {
  @ApiProperty({
    description: 'シフト',
    default: 'フロアシフト',
  })
  @IsString()
  name: string;
}
