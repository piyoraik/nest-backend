import { Injectable } from '@nestjs/common';
import { AuctionListingService } from 'src/auction-listing/auction-listing.service';
import { AfterSuccessfulBid } from 'src/entity/after.successful.bid.entity';
import { AfterSuccessfulBidRepository } from './after-successful-bid.repository';
import { CreateAfterSuccessfulBidDTO } from './dto/create.after-successful-bid.dto';

@Injectable()
// afterSuccessfulBid.service.ts
export class AfterSuccessfulBidService {
  constructor(
    private readonly afterSuccessfulBidRepository: AfterSuccessfulBidRepository,
    private readonly auctionListingService: AuctionListingService,
  ) {}

  // create
  async create(
    createAfterSuccessfulBidDTO: CreateAfterSuccessfulBidDTO,
    auctionListingId: number,
  ) {
    const auctionListing = await this.auctionListingService.findOneID(
      auctionListingId,
    );
    const res =
      await this.afterSuccessfulBidRepository.createAfterSuccessfulBid(
        createAfterSuccessfulBidDTO,
        auctionListing,
      );
    return await this.findOneID(res.id);
  }

  // findAll
  async findAll() {
    return await this.afterSuccessfulBidRepository.find({
      relations: ['auctionListing'],
    });
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
