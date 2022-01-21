import { Injectable } from '@nestjs/common';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { MembersService } from 'src/members/members.service';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';
import { CreateAfterSuccessfulBidDTO } from './dto/create.after-successful-bid.dto';

@Injectable()
export class AfterSuccessfulBidService {
  constructor(
    private afterSuccessfulBidRepository: AfterSuccessfulBidRepository,
    private memberService: MembersService,
  ) {}

  async create(
    createAfterSuccessfulBidDTO: CreateAfterSuccessfulBidDTO,
    payLoad: PayLoad,
  ) {
    const member = await this.memberService.findOne({ email: payLoad.email });
    // return this.afterSuccessfulBidRepository.createAfterSuccessfulBid();
  }
}
