import { Module } from '@nestjs/common';
import { AuctionColorService } from './auction-color.service';
import { AuctionColorController } from './auction-color.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionColor } from 'src/entity/auction.color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AuctionColor])],
  providers: [AuctionColorService],
  controllers: [AuctionColorController],
})
export class AuctionColorModule {}
