import { Injectable } from '@nestjs/common';
import { Auction } from 'src/entity/auction.entity';
import { CarBodyNumber } from 'src/entity/car.body.number.entity';
import { AuctionListingRepository } from './auction-listing.repository';
import { CreateAuctionListingDTO } from './dto/create.auction-listing.dto';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { MembersService } from 'src/members/members.service';
import { AuctionListing } from 'src/entity/auction.listing.entity';

@Injectable()
export class AuctionListingService {
  constructor(
    private auctionListingRepository: AuctionListingRepository,
    private membersService: MembersService,
  ) {}
  async create(
    createAuctionListingDTO: CreateAuctionListingDTO,
    payLoad: PayLoad,
    auction: Auction,
    carBodyNumber: CarBodyNumber,
  ) {
    const member = await this.membersService.findOne({ email: payLoad.email });
    return this.auctionListingRepository.createAuctionListing(
      createAuctionListingDTO,
      member,
      auction,
      carBodyNumber,
    );
  }

  async findOneID(id: number) {
    return await this.auctionListingRepository.findOneAuctionListing({ id });
  }

  async findOne(attrs: Partial<AuctionListing>) {
    return await this.auctionListingRepository.findOneAuctionListing(attrs);
  }

  // update
  async update(id: number, attrs: Partial<AuctionListing>) {
    return await this.auctionListingRepository.updateAuctionListing(id, attrs);
  }

  // softDelete
  async softDelete(id: number) {
    return await this.auctionListingRepository.softDeleteAuctionListing(id);
  }
}
