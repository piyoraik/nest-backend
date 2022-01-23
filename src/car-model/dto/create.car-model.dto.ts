import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateCarModelDTO {
  @ApiProperty({
    description: '車種名',
    default: 'ワゴンR',
  })
  @IsString()
  name: string;
}
