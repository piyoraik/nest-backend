import { IsString } from 'class-validator';

export class CreateSalesPointDTO {
  @IsString()
  point: string;
}
