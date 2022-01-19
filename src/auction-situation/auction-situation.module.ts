import { Module } from '@nestjs/common';
import { AuctionSituationService } from './auction-situation.service';
import { AuctionSituationController } from './auction-situation.controller';

@Module({
  providers: [AuctionSituationService],
  controllers: [AuctionSituationController]
})
export class AuctionSituationModule {}
