import { IsOptional, IsString } from 'class-validator';

export class CreateSalesPointDTO {
  @ApiProperty({
    description: 'セールスポイント',
    default: 'セールスポイント',
  })
  @IsOptional()
  @IsString()
  point: string;
}
