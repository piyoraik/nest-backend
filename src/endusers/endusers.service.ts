import { Injectable } from '@nestjs/common';
import { Admin } from 'src/entity/admin.entity';
import { AfterSuccessfulBid } from 'src/entity/after.successful.bid.entity';
import { Auction } from 'src/entity/auction.entity';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { Color } from 'src/entity/color.entity';
import { DeliveryMethod } from 'src/entity/delivery.method.entity';
import { Members } from 'src/entity/member.entity';
import { Option } from 'src/entity/option.entity';
import { PaymentMethods } from 'src/entity/payment.methods.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EndusersService {
  constructor(
    private readonly memberRepo: Repository<Members>,
    private readonly actionRepo: Repository<Auction>,
    private readonly actionListingRepo: Repository<AuctionListing>,
    private readonly optionRepo: Repository<Option>,
    private readonly deliveryRepo: Repository<DeliveryMethod>,
    private readonly paymentRepo: Repository<PaymentMethods>,
    private readonly purchaseRepo: Repository<Auction>,
    private readonly afterSuccessRepo: Repository<AfterSuccessfulBid>,
    private readonly colorRepo: Repository<Color>,
    private readonly adminRepo: Repository<Admin>,
  ) {}
}
