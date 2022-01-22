import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AfterSuccessfulBidService } from './after-successful-bid.service';
import { CreateAfterSuccessfulBidDTO } from './dto/create.after-successful-bid.dto';

@ApiTags('落札後')
@Controller('after-successful-bid')
export class AfterSuccessfulBidController {
  constructor(
    private readonly afterSuccessfulBidService: AfterSuccessfulBidService,
  ) {}

  @Get()
  findAll() {
    return this.afterSuccessfulBidService.findAll();
  }

  @Post(':auctionListingId')
  create(
    @Param('auctionListingId') id: string,
    @Body() body: CreateAfterSuccessfulBidDTO,
  ) {
    return this.afterSuccessfulBidService.create(body, +id);
  }

  @Get(':afterSuccessfulBidID')
  findOneId(@Param('afterSuccessfulBidID') id: string) {
    return this.afterSuccessfulBidService.findOneID(+id);
  }
}
