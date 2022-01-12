import {
  IsEmail,
  IsEmpty,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMemberDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsEmpty()
  @IsString()
  companyName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
