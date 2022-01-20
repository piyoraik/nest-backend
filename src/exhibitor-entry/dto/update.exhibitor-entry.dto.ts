import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateExhibitorEntryDTO {
  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  repairHistory: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  jack: boolean;

  @ApiProperty()
  @IsOptional()
  @IsBoolean()
  tool: boolean;

  @ApiProperty()
  @IsOptional()
  @IsString()
  text: string;

  @ApiProperty()
  @IsOptional()
  @IsNumber()
  recyclePrice: number;
}
