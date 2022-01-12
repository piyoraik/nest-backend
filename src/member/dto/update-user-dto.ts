import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateMemberDTO {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  companyName: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @MinLength(8)
  @MaxLength(32)
  password: string;
}
