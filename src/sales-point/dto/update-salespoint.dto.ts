import { IsOptional, IsString } from 'class-validator';

export class CreateSalesPointDTO {
  @IsOptional()
  @IsString()
  point: string;
}
