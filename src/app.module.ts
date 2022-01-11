import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';
import { EndusersModule } from './endusers/endusers.module';
import { AuctionColorModule } from './auction-color/auction-color.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuctionModule,
    EndusersModule,
    AuctionColorModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
