import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';
import { EndusersController } from './endusers/endusers.controller';
import { EndusersService } from './endusers/endusers.service';
import { EndusersModule } from './endusers/endusers.module';
import { AuctionColorModule } from './auction-color/auction-color.module';
import { ActionColorController } from './action-color/action-color.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuctionModule,
    EndusersModule,
    AuctionColorModule,
  ],
  controllers: [AppController, EndusersController, ActionColorController],
  providers: [AppService, EndusersService],
})
export class AppModule {}
