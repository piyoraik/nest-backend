import { Module } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AuctionController } from './auction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionRepository } from './auction.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AuctionRepository])],
  providers: [AuctionService],
  controllers: [AuctionController],
})
export class AuctionModule {}
