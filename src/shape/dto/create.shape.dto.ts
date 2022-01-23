import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateShapeDTO {
  @ApiProperty({
    description: '形状',
    default: '軽自動車',
  })
  @IsString()
  name: string;
}
