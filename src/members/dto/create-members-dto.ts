import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMembersDTO {
  @ApiProperty({
    default: 'テスト 太郎',
    description: '名前',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: '会社名',
    default: '株式会社HOGE',
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
    default: 'asdfasdf123',
  })
  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password: string;

  @ApiProperty({
    description: '電話番号',
    default: '090-1234-1234',
  })
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
    description: '住所',
    default: '大阪府大阪市北区梅田３丁目３−１',
  })
  @IsString()
  address: string;
}
