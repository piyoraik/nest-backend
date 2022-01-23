import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateMembersDTO {
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
    default: '株式会社HOGE',
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
    default: 'asdfasdf123',
  })
  @IsOptional()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @ApiProperty({
    required: false,
    description: '電話番号',
    default: '090-1234-1234',
  })
  @IsOptional()
  @IsString()
  phoneNumber: string;

  @ApiProperty({
    required: false,
    description: 'アイコン',
    default: 'hoge.png',
  })
  @IsOptional()
  iconImage: string;

  @ApiProperty({
    required: false,
    description: '住所',
  })
  @IsOptional()
  @IsString()
  address: string;

  @ApiProperty({
    description: '悪質フラグ',
    type: Boolean,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  malicuousFlag: boolean;

  @ApiProperty({
    description: '与信チェック',
    type: Boolean,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  creditCheck: boolean;
}
