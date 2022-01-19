import { Injectable } from '@nestjs/common';
import { AuctionSituationRepository } from './auction-situation.repository';

@Injectable()
export class AuctionSituationService {
  constructor(
    private readonly auctionSituationRepository: AuctionSituationRepository,
  ) {}
}
