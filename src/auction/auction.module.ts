import { Module } from '@nestjs/common';
import { AuctionService } from './auction.service';
import { AuctionController } from './auction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionRepository } from './auction.repository';
import { MemberModule } from 'src/members/members.module';

@Module({
  imports: [TypeOrmModule.forFeature([AuctionRepository]), MemberModule],
  providers: [AuctionService],
  controllers: [AuctionController],
})
export class AuctionModule {}
