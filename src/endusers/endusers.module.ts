import { Module } from '@nestjs/common';
import { EndusersService } from './endusers.service';
import { EndusersController } from './endusers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Members } from 'src/entity/member.entity';
import { Auction } from 'src/entity/auction.entity';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { Admin } from 'src/entity/admin.entity';
import { DeliveryMethod } from 'src/entity/delivery.method.entity';
import { PaymentMethods } from 'src/entity/payment.methods.entity';
import { PurchaseManagement } from 'src/entity/purchase.management.entity';
import { Color } from 'src/entity/color.entity';
import { AfterSuccessfulBid } from 'src/entity/after.successful.bid.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Members,
      Auction,
      AuctionListing,
      Option,
      DeliveryMethod,
      PaymentMethods,
      PurchaseManagement,
      AfterSuccessfulBid,
      Color,
      Admin,
    ]),
  ],
  providers: [EndusersService],
  controllers: [EndusersController],
})
export class EndusersModule {}
