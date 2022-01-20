import { Injectable } from '@nestjs/common';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';

@Injectable()
export class AfterSuccessfulBidService {
    constructor(
        private afterSuccessfulBidRepository:AfterSuccessfulBidRepository,
    ){}
}
