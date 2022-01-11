import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';
import { EndusersController } from './endusers/endusers.controller';
import { EndusersService } from './endusers/endusers.service';
import { EndusersModule } from './endusers/endusers.module';

@Module({
  imports: [TypeOrmModule.forRoot(), AuctionModule, EndusersModule],
  controllers: [AppController, EndusersController],
  providers: [AppService, EndusersService],
})
export class AppModule {}
