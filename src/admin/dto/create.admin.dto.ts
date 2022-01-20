import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateAdminDTO {
  @ApiProperty()
  @IsNumber()
  adminId: number;

  @ApiProperty()
  @IsString()
  password: string;
}
