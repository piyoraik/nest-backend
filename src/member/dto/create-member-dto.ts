import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMemberDTO {
  @ApiProperty({
    default: 'テスト 太郎',
    description: '名前',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: '会社名',
  })
  @IsOptional()
  @IsString()
  companyName: string;

  @ApiProperty({
    default: 'adsf@asdf.com',
    description: 'メールアドレス',
  })
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    description: 'パスワード',
    minLength: 8,
    maxLength: 32,
  })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @ApiProperty({
    description: '電話番号',
  })
  @IsString()
  phoneNumber: string;

  @ApiProperty({ required: false, description: 'アイコン' })
  @IsOptional()
  iconImage: string;

  @ApiProperty({
    description: '住所',
  })
  @IsString()
  address: string;
}
