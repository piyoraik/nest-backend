import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateShiftDTO {
  @ApiProperty({
    description: 'シフト',
    default: 'フロアシフト',
  })
  @IsOptional()
  @IsString()
  name: string;
}
