import { Injectable } from '@nestjs/common';
import { AfterSuccessfulBid } from 'src/entity/after.successful.bid.entity';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';
import { CreateAfterSuccessfulBidDTO } from './dto/create.after-successful-bid.dto';

@Injectable()
// afterSuccessfulBid.service.ts
export class AfterSuccessfulBidService {
  constructor(
    private afterSuccessfulBidRepository: AfterSuccessfulBidRepository,
  ) {}

  // create
  async create(
    createAfterSuccessfulBidDTO: CreateAfterSuccessfulBidDTO,
    auctionListing: AuctionListing,
  ) {
    return await this.afterSuccessfulBidRepository.createAfterSuccessfulBid(
      createAfterSuccessfulBidDTO,
      auctionListing,
    );
  }

  // findAll
  async findAll() {
    return await this.afterSuccessfulBidRepository.find();
  }

  // findOneID
  async findOneID(id: number) {
    return await this.afterSuccessfulBidRepository.findOneAfterSuccessfulBid({
      id,
    });
  }

  // findOne
  async findOne(attrs: Partial<AfterSuccessfulBid>) {
    return await this.afterSuccessfulBidRepository.findOneAfterSuccessfulBid(
      attrs,
    );
  }

  // findWhere
  async findWhere(attrs: Partial<AfterSuccessfulBid>) {
    return await this.afterSuccessfulBidRepository.findWhereLikeAfterSuccessfulBid(
      attrs,
    );
  }

  // update
  async update(id: number, attrs: Partial<AfterSuccessfulBid>) {
    return await this.afterSuccessfulBidRepository.updateAfterSuccessfulBid(
      id,
      attrs,
    );
  }

  // softDelete
  async softDelete(id: number) {
    return await this.afterSuccessfulBidRepository.softDeleteAfterSuccessfulBid(
      id,
    );
  }
}
