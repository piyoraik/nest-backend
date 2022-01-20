import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuctionModule } from './auction/auction.module';
import { MemberModule } from './member/member.module';
import { AuthModule } from './auth/auth.module';
import { ListingCarModule } from './listing-car/listing-car.module';
import { TestingRecordModule } from './testing-record/testing-record.module';
import { InspectionModule } from './inspection/inspection.module';
import { CarBodyEvaluationModule } from './car-body-evaluation/car-body-evaluation.module';
import { AdditionModule } from './addition/addition.module';
import { SalesPointModule } from './sales-point/sales-point.module';
import { CarBodyImageModule } from './car-body-image/car-body-image.module';
import { PaperClassModule } from './paper-class/paper-class.module';
import { SuggestedListingModule } from './suggested-listing/suggested-listing.module';
import { AuctionSituationModule } from './auction-situation/auction-situation.module';
import { PriceModule } from './price/price.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuctionModule,
    MemberModule,
    AuthModule,
    ListingCarModule,
    TestingRecordModule,
    InspectionModule,
    CarBodyEvaluationModule,
    AdditionModule,
    SalesPointModule,
    CarBodyImageModule,
    PaperClassModule,
    SuggestedListingModule,
    AuctionSituationModule,
    PriceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
