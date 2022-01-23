import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateImportedCarDTO {
  @ApiProperty({
    description: '輸入車',
    default: 'ディーラー車',
  })
  @IsOptional()
  @IsString()
  name: string;
}
