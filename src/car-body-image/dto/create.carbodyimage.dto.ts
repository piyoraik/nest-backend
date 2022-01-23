import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCarBodyImageDTO {
  @ApiProperty({
    description: '車体画像',
    default: 'hoge.png',
  })
  @IsString()
  img: string;
}
