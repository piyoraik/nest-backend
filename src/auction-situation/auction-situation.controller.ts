import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { GetMember } from 'src/auth/decorator/member.decorator';
import { PayLoad } from 'src/auth/interfaces/payload-interfaces';
import { AuctionSituationService } from './auction-situation.service';
import { CreateAuctionSituationDTO } from './dto/create.auction-situation.dto';

@Controller('auction-situation')
export class AuctionSituationController {
  constructor(
    private readonly auctionSituationService: AuctionSituationService,
  ) {}

  @Post(':auctionListingID')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Param('auctionListingID') auctionListingID: string,
    @Body() body: CreateAuctionSituationDTO,
    @GetMember() payloadMember: PayLoad,
  ) {
    // return this.auctionSituationService.create(body, payloadMember);
    return this.auctionSituationService.create(
      body,
      payloadMember,
      +auctionListingID,
    );
  }

  @Get(':id')
  findOneId(@Param('id') id: string) {
    return this.auctionSituationService.findOneId(+id);
  }
}
