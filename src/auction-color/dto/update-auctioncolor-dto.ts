import { IsOptional, IsString } from 'class-validator';

export class UpdateAuctionColorDTO {
  @IsOptional()
  @IsString()
  name: string;
}
