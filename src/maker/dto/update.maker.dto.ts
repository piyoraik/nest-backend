import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateMakerDTO {
  @ApiProperty({
    description: 'メーカー',
    default: 'トヨタ',
  })
  @IsOptional()
  @IsString()
  name: string;
}
