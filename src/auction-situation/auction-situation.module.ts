import { Module } from '@nestjs/common';
import { AuctionSituationService } from './auction-situation.service';
import { AuctionSituationController } from './auction-situation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionSituationRepository } from './auction-situation.repository';

@Module({
  imports: [TypeOrmModule.forFeature([AuctionSituationRepository])],
  providers: [AuctionSituationService],
  controllers: [AuctionSituationController],
})
export class AuctionSituationModule {}
