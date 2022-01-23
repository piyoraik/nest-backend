import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCarBodyImageDTO {
  @ApiProperty({
    description: '車体画像',
    default: 'hoge.png',
  })
  @IsOptional()
  @IsString()
  img: string;
}
