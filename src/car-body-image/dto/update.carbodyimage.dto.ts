import { IsOptional, IsString } from 'class-validator';

export class UpdateCarBodyImageDTO {
  @IsOptional()
  @IsString()
  img: string;
}
