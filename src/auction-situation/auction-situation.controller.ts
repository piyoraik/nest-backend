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

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  create(
    @Body() body: CreateAuctionSituationDTO,
    @GetMember() payloadMember: PayLoad,
  ) {
    // return this.auctionSituationService.create(body, payloadMember);
  }

  @Get(':id')
  findOneId(@Param('id') id: string) {
    return this.auctionSituationService.findOneId(+id);
  }
}
