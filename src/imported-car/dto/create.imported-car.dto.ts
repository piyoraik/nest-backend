import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateImportedCarDTO {
  @ApiProperty({
    description: '輸入車',
    default: 'ディーラー車',
  })
  @IsString()
  name: string;
}
