import { IsString } from 'class-validator';

export class CreateCarBodyImageDTO {
  @IsString()
  img: string;
}
