import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateMakerDTO {
  @ApiProperty({
    description: 'メーカー',
    default: 'トヨタ',
  })
  @IsString()
  name: string;
}
