import { Module } from '@nestjs/common';
import { AuctionSituationService } from './auction-situation.service';
import { AuctionSituationController } from './auction-situation.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuctionSituationRepository } from './auction-situation.repository';
import { MembersModule } from 'src/members/members.module';
import { AuctionListingModule } from 'src/auction-listing/auction-listing.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([AuctionSituationRepository]),
    MembersModule,
    AuctionListingModule,
  ],
  providers: [AuctionSituationService],
  controllers: [AuctionSituationController],
})
export class AuctionSituationModule {}
