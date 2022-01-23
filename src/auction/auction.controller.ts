import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery, ApiTags, PartialType } from '@nestjs/swagger';
import { Auction } from 'src/entity/auction.entity';
import { AuctionService } from './auction.service';
import { CreateAuctionDto } from './dto/create-auction.dto';
import { UpdateAuctionDto } from './dto/update-auction.dto';

@ApiTags('オークション')
@Controller('auction')
export class AuctionController {
  constructor(private readonly auctionService: AuctionService) {}

  @Get()
  fetchAll() {
    return this.auctionService.fetchAll();
  }

  @Post()
  create(@Body() body: CreateAuctionDto) {
    return this.auctionService.create(body);
  }

  @ApiQuery({ type: PartialType(CreateAuctionDto), required: false })
  @Get('search')
  search(@Query() attrs: Partial<Auction>) {
    return this.auctionService.findWhereLike(attrs);
  }

  @Get(':auctionID')
  findOne(@Param('auctionID') id: string) {
    return this.auctionService.findOne({ id: +id });
  }

  @Patch(':auctionID')
  update(@Param('auctionID') id: string, @Body() body: UpdateAuctionDto) {
    return this.auctionService.update(+id, body);
  }

  @Delete(':auctionID')
  delete(@Param('auctionID') id: string) {
    return this.auctionService.softDelete(+id);
  }
}
