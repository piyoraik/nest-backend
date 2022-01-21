import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiQuery, PartialType } from '@nestjs/swagger';
import { GetMember } from 'src/auth/decorator/member.decorator';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { AuctionListingService } from './auction-listing.service';
import { CreateAuctionListingDTO } from './dto/create.auction-listing.dto';
import { UpdateAuctionListingDTO } from './dto/update.auction-listing.dto';

@Controller('auction-listing')
export class AuctionListingController {
  constructor(private readonly auctionListingService: AuctionListingService) {}

  @Get()
  findAll() {
    return this.auctionListingService.findAll();
  }

  @Post(':auctionId')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  create(
    @Param('auctionId') auctionId: string,
    @GetMember() payloadMember: PayLoad,
    @Body() body: CreateAuctionListingDTO,
    @Query('carBodyNumberID') carBodyNumberID: string,
  ) {
    return this.auctionListingService.create(
      body,
      payloadMember,
      +auctionId,
      +carBodyNumberID,
    );
  }

  @ApiQuery({ type: PartialType(CreateAuctionListingDTO), required: false })
  @Get('search')
  search(@Param() attrs: Partial<AuctionListing>) {
    return this.auctionListingService.findWhere(attrs);
  }

  @Patch('auctionId')
  update(
    @Param('auctionId') id: string,
    @Body() body: UpdateAuctionListingDTO,
  ) {
    return this.auctionListingService.update(+id, body);
  }

  @Delete('auctionId')
  delete(@Param('auctionId') id: string) {
    return this.auctionListingService.softDelete(+id);
  }
}
