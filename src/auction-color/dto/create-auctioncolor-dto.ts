import { IsNotEmpty, IsString } from 'class-validator';

export class CreateAuctionColorDTO {
  @IsNotEmpty()
  @IsString()
  name: string;
}
