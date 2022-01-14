import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateMemberDTO {
  @ApiProperty({
    required: false,
    default: 'テスト 太郎',
    description: '名前',
  })
  @IsOptional()
  @IsString()
  name: string;

  @ApiProperty({
    required: false,
    description: '会社名',
  })
  @IsOptional()
  @IsString()
  companyName: string;

  @ApiProperty({
    required: false,
    default: 'adsf@asdf.com',
    description: 'メールアドレス',
  })
  @IsOptional()
  @IsEmail()
  email: string;

  @ApiProperty({
    required: false,
    description: 'パスワード',
    minLength: 8,
    maxLength: 32,
  })
  @IsOptional()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @ApiProperty({
    required: false,
    description: '電話番号',
  })
  @IsOptional()
  @IsString()
  phoneNumber: string;

  @ApiProperty({ required: false, description: 'アイコン' })
  @IsOptional()
  iconImage: string;

  @ApiProperty({
    required: false,
    description: '住所',
  })
  @IsOptional()
  @IsString()
  address: string;
}
