import { Module } from '@nestjs/common';
import { AuctionSituationService } from './auction-situation.service';
import { AuctionSituationController } from './auction-situation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionSituationRepository } from './auction-situation.repository';
import { MemberModule } from 'src/member/member.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuctionSituationRepository]),
    MemberModule,
  ],
  providers: [AuctionSituationService],
  controllers: [AuctionSituationController],
})
export class AuctionSituationModule {}
