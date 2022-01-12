import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';
import { AuctionColorModule } from './auction-color/auction-color.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuctionModule,
    AuctionColorModule,
    MemberModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
