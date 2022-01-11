import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuctionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
