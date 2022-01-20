import { Injectable } from '@nestjs/common';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';

@Injectable()
export class AfterSuccessfulBidService {
  constructor(
    private afterSuccessfulBidRepository: AfterSuccessfulBidRepository,
    private deliveryMethodService: DeliveryMethodService,
  ) {}

  async create(
    createAfterSuccessfulBidDTO: CreateAfterSuccessfulBidDTO,
    payLoad: PayLoad,
  ) {
    const member = await this.memberService.findOne({ email: payLoad.email });
    return this.afterSuccessfulBidRepository.createAfterSuccessfulBid(
      createAfterSuccessfulBidDTO,
      member,
    );
  }
}
