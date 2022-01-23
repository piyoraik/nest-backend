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
import { ApiBearerAuth, ApiQuery, ApiTags, PartialType } from '@nestjs/swagger';
import { GetMember } from 'src/auth/decorator/member.decorator';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { AuctionListing } from 'src/entity/auction.listing.entity';
import { AuctionListingService } from './auction-listing.service';
import { CreateAuctionListingDTO } from './dto/create.auction-listing.dto';
import { UpdateAuctionListingDTO } from './dto/update.auction-listing.dto';

@ApiTags('オークション出品車')
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

  @Get(':auctionListingId')
  findOneId(@Query('auctionListingId') id: string) {
    return this.auctionListingService.findOneID(+id);
  }

  @ApiQuery({ type: PartialType(CreateAuctionListingDTO), required: false })
  @Get('search')
  search(@Param() attrs: Partial<AuctionListing>) {
    return this.auctionListingService.findWhere(attrs);
  }

  @Patch(':auctionListingId')
  update(
    @Param('auctionListingId') id: string,
    @Body() body: UpdateAuctionListingDTO,
  ) {
    return this.auctionListingService.update(+id, body);
  }

  @Delete(':auctionListingId')
  delete(@Param('auctionListingId') id: string) {
    return this.auctionListingService.softDelete(+id);
  }
}
