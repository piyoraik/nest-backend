import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class CreateExhibitorEntryDTO {
  @ApiProperty()
  @IsBoolean()
  repairHistory: boolean;

  @ApiProperty()
  @IsBoolean()
  jack: boolean;

  @ApiProperty()
  @IsBoolean()
  tool: boolean;

  @ApiProperty()
  @IsString()
  text: string;

  @ApiProperty()
  @IsNumber()
  recyclePrice: number;
}
