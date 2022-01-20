import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateAdminDTO {
  @ApiProperty()
  @IsOptional()
  @IsNumber()
  adminId: number;

  @ApiProperty()
  @IsOptional()
  @IsString()
  password: string;
}
