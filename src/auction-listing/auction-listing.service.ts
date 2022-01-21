import { Injectable } from '@nestjs/common';
import { AuctionListingRepository } from './auction-listing.repository';

@Injectable()
export class AuctionListingService {
  constructor(private auctionListingRepository: AuctionListingRepository) {}
}
